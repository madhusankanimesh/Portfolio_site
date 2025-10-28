const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET all projects
router.get("/", async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

// POST a new project
router.post("/", async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.status(201).json(newProject);
});

module.exports = router;
