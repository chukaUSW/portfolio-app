import { Router } from "express";
import Skill from "../models/Skill.js";

const skillsRouter = Router();

skillsRouter.get("/", async (req, res) => {
  const skills = await Skill.find();
  res.render("index.ejs", { skills });
});

skillsRouter.get("/add-skill", async (req, res) => {
  const skills = await Skill.find();
  res.render("add-skill.ejs");
});

// To save to the db
skillsRouter.post("/", async (req, res) => {
  const {
    skillName,
    skillDescription,
    projectName,
    projectTechStack,
    projectDescription,
  } = req.body;

  const newSkill = new Skill({
    skillName,
    skillDescription,
    projectName,
    projectTechStack,
    projectDescription,
  });

  const saved = await newSkill.save();

  res.redirect("/");
});

skillsRouter.get("/projects", async (req, res) => {
  const skills = await Skill.find();
  res.render("index.ejs", { skills });
});

skillsRouter.get("/skills", async (req, res) => {
  const skills = await Skill.find(
    {},
    { skillName: true, skillDescription: true, _id: true }
  );
  console.log(skills);
  res.render("skills.ejs", { skills });
});

// Update
skillsRouter.post("/update", async (req, res) => {
  const {
    id,
    skillName,
    skillDescription,
    projectName,
    projectTechStack,
    projectDescription,
  } = req.body;

  const updated = await Skill.findByIdAndUpdate(id, {
    skillName,
    skillDescription,
    projectName,
    projectTechStack,
    projectDescription,
  });

  res.redirect("/");
});

skillsRouter.get("/edit/:id", async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.redirect("/");
  }

  const skill = await Skill.findById(id);
  res.render("edit-skill.ejs", { skill });
});

skillsRouter.get("/delete/:id", async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.redirect("/");
  }

  const deleted = await Skill.findByIdAndDelete(id);
  res.redirect("/");
});

export default skillsRouter;
