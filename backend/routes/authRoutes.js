const express = require("express");
const router = express.Router();

const db = require("../database/db"); // ✅ IMPORT DATABASE

const {
  signup,
  login,
  getStudents,
  deleteStudent
} = require("../controllers/authController");

/* ================= AUTH ROUTES ================= */

router.post("/signup", signup);
router.post("/login", login);
router.get("/students", getStudents);
router.delete("/students/:id", deleteStudent);

/* ================= TEMP ADMIN CREATOR ================= */

router.get("/make-admin", (req, res) => {

  db.run(
    "UPDATE students SET role='admin' WHERE email='admin@gmail.com'",
    function (err) {

      if (err) {
        return res.json({ error: err.message });
      }

      res.json({ message: "Admin created successfully" });
    }
  );

});

module.exports = router;