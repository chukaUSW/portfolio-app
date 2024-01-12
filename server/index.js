import express from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import mongoose from "mongoose";

import skillsRouter from "./routes/skills.router.js";

const app = express();

mongoose
  .connect(process.env.MONGO_URL ?? "mongodb://localhost:27017/portfolio-db")
  .then(() => console.log("Mongodb connected!"));

const PORT = process.env.PORT ?? 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "./layouts/main");
app.set("layout extractScripts", true);
app.use(express.static(path.resolve("public")));

app.use("/", skillsRouter);

app.listen(PORT, () => console.log(`Server running in port --> ${PORT}`));
