import express from "express";

// Initialize  express
const app: express.Application = express();

// Take a PORT 3000 for running server.
const PORT: number = 4000;

app.get("/", (req, res) => {
  res.send("Connected!");
});
// Server setup
app.listen(PORT, () => {
  console.log(`Connected server at
         http://localhost:${PORT}/`);
});
