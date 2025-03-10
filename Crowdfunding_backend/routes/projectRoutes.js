const express = require("express");
const { createProject, getProjects } = require("../controllers/projectController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createProject);
router.get("/", getProjects);

module.exports = router;
