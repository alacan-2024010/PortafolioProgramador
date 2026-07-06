import express from "express";

const app = express();
const PORT = process.env.PORT || 3002;

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Servidor funcionando correctamente" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});