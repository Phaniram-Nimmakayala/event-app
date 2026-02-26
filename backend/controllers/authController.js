const db = require("../database/db");
const bcrypt = require("bcrypt");

/* ================= SIGNUP ================= */
exports.signup = async (req, res) => {

  const {
    firstName,
    lastName,
    email,
    mobile,
    sucNo,
    password,
    confirmPassword
  } = req.body;

  const role = "student";

  if (password !== confirmPassword)
    return res.json({ message: "Passwords do not match" });

  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
  `INSERT INTO students 
  (firstName,lastName,email,mobile,sucNo,password,role)
  VALUES (?,?,?,?,?,?,?)`,
  [firstName,lastName,email,mobile,sucNo,hashedPassword,role],
    function(err){
      if(err)
        return res.json({ message:"User already exists" });

      res.json({ message:"Signup successful" });
    }
  );
};


/* ================= LOGIN ================= */
exports.login = (req,res)=>{

  const { sucNo, password } = req.body;

  db.get(
    `SELECT * FROM students WHERE sucNo=?`,
    [sucNo],
    async (err,user)=>{

      if(!user)
        return res.json({message:"Invalid SUC or Password"});

      const match = await bcrypt.compare(
        password,
        user.password
      );

      if(!match)
        return res.json({message:"Invalid SUC or Password"});

      res.json({
  message: "Login Successful",
  user: {
    id: user.id,
    firstName: user.firstName,
    role: user.role   // ✅ ADD THIS
  }
});
    }
  );
};


exports.getStudents = (req, res) => {

  db.all(
    `SELECT id, firstName, lastName, email, mobile, sucNo 
     FROM students 
     WHERE role='student'`,
    [],
    (err, rows) => {

      if (err)
        return res.status(500).json({ error: err.message });

      res.json(rows);
    }
  );
};


exports.deleteStudent = (req, res) => {

  const { id } = req.params;

  db.run(
    "DELETE FROM students WHERE id = ?",
    [id],
    function (err) {

      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      res.json({
        message: "Student deleted successfully"
      });
    }
  );
};