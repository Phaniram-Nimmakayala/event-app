const express = require("express");
const router = express.Router();

const {
  addEvent,
  getEvents,
  enrollStudent,
  dashboardStats,
  getEnrollments,
  deleteEnrollment,
  deleteEvent,
  saveFeedback,
getFeedback,
deleteFeedback
} = require("../controllers/eventController");

router.post("/add", addEvent);
router.get("/", getEvents);
router.post("/enroll", enrollStudent);
router.get("/stats", dashboardStats);

router.get("/enrollments", getEnrollments);
router.delete("/enrollments/:id", deleteEnrollment);
router.delete("/events/:id", deleteEvent);
router.post("/feedback", saveFeedback);
router.get("/feedback", getFeedback);
router.delete("/feedback/:id", deleteFeedback);

module.exports = router;