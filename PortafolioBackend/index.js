import express from "express";

const app = express();
const PORT = 4000;

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Servidor funcionando correctamente" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});