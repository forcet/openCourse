import express from "express";
import genericRouter  from "./routes/Generic"

const app = express();
const port = process.env.APP_PORT || 3001;

app.use(genericRouter);

app.listen(port, () => {
  console.log(`Servidor TS escuchando en http://localhost:${port}`);
});