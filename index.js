import express from "express";
import { models } from "./models.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/models", (req, res) => {
  res.json(models);
});

app.get("/featured/models", (req, res) => {
  res.json(models.splice(0, 5));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
