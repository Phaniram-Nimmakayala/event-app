const db = require("../database/db");

/* ================= ADD EVENT (ADMIN) ================= */
exports.addEvent = (req, res) => {

  const { eventName } = req.body;

  db.run(
    "INSERT INTO events (eventName) VALUES (?)",
    [eventName],
    function (err) {

      if (err)
        return res.status(500).json(err);

      res.json({ message: "Event Added Successfully" });
    }
  );
};


/* ================= GET EVENTS ================= */
exports.getEvents = (req, res) => {

  db.all("SELECT * FROM events", [], (err, rows) => {
    res.json(rows);
  });

};


/* ================= ENROLL STUDENT ================= */
exports.enrollStudent = (req, res) => {

  const {
    firstName,
    lastName,
    email,
    mobile,
    sucNo,
    college,
    course,
    projectTitle,
    eventId
  } = req.body;

  db.run(
    `INSERT INTO enrollments
    (firstName,lastName,email,mobile,sucNo,college,course,projectTitle,eventId)
    VALUES (?,?,?,?,?,?,?,?,?)`,
    [
      firstName,
      lastName,
      email,
      mobile,
      sucNo,
      college,
      course,
      projectTitle,
      eventId
    ],
    function (err) {

      if (err)
        return res.status(500).json(err);

      res.json({ message: "Enrollment Successful" });
    }
  );
};


/* ================= DASHBOARD COUNT ================= */
exports.dashboardStats = (req, res) => {

  db.get(
    `SELECT 
      (SELECT COUNT(*) 
       FROM students 
       WHERE role='student') AS totalStudents,

      (SELECT COUNT(*) 
       FROM enrollments) AS totalEnrollments
    `,
    [],
    (err, row) => {

      if (err)
        return res.status(500).json(err);

      res.json(row);
    }
  );
};


/* ================= GET ENROLLMENTS ================= */
exports.getEnrollments = (req, res) => {

  db.all(
    `SELECT enrollments.*, events.eventName
   FROM enrollments
   LEFT JOIN events
   ON enrollments.eventId = events.id`,
    [],
    (err, rows) => {

      if (err)
        return res.status(500).json(err);

      res.json(rows);
    }
  );
};


exports.deleteEnrollment = (req, res) => {

  const { id } = req.params;

  db.run(
    "DELETE FROM enrollments WHERE id=?",
    [id],
    function(err){

      if(err)
        return res.status(500).json(err);

      res.json({ message:"Enrollment deleted" });
    }
  );
};


/* ================= DELETE EVENT ================= */
exports.deleteEvent = (req, res) => {

  const { id } = req.params;

  db.run(
    "DELETE FROM events WHERE id=?",
    [id],
    function(err){

      if(err)
        return res.status(500).json(err);

      res.json({ message: "Event deleted successfully" });
    }
  );
};


/* ================= SAVE FEEDBACK ================= */
exports.saveFeedback = (req, res) => {

  const { name, email, message } = req.body;

  db.run(
    "INSERT INTO feedback (name,email,message) VALUES (?,?,?)",
    [name, email, message],
    function(err){

      if(err)
        return res.status(500).json(err);

      res.json({ message: "Feedback Sent Successfully" });
    }
  );
};

/* ================= GET FEEDBACK ================= */
exports.getFeedback = (req, res) => {

  db.all(
    "SELECT * FROM feedback",
    [],
    (err, rows) => {

      if(err)
        return res.status(500).json(err);

      res.json(rows);
    }
  );
};

/* ================= DELETE FEEDBACK ================= */
exports.deleteFeedback = (req, res) => {

  const { id } = req.params;

  db.run(
    "DELETE FROM feedback WHERE id=?",
    [id],
    function(err){

      if(err)
        return res.status(500).json(err);

      res.json({ message:"Feedback deleted" });
    }
  );
};