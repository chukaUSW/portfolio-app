import { Schema, model } from "mongoose";

const skillsSchema = new Schema({
  skillName: {
    type: String,
    required: true,
  },
  skillDescription: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  projectTechStack: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
});

const Skill = model("skills", skillsSchema);

export default Skill;
