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

router.get("/fix-role-column", (req, res) => {

  db.run(
    "ALTER TABLE students ADD COLUMN role TEXT DEFAULT 'student'",
    (err) => {
      if (err) {
        return res.json({ error: err.message });
      }

      res.json({ message: "Role column added ✅" });
    }
  );

});

module.exports = router;