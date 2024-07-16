import express from "express";
import { models } from "./models.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.get("/models", (req, res) => {
  res.json(models);
});

// app.get("/models/:id", (req, res) => {
//   const modelId = parseInt(req.params.id, 10);
//   const model = models.find((m) => m.id === modelId);
//   if (model) {
//     res.json(model);
//   } else {
//     res.status(404).send("Model not found");
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
