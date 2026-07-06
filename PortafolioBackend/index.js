import "dotenv/config";
import express from "express";
import { dbConnection } from "./configs/db.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Servidor funcionando correctamente" });
});

async function startServer() {
  await dbConnection();
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

startServer();