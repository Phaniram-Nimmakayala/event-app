const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  getStudents,
  deleteStudent
} = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/students", getStudents);
router.delete("/students/:id", deleteStudent);

module.exports = router;