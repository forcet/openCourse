import express from "express";
import genericRouter  from "./routes/Generic"
import start  from "./routes/Start"
import health  from "./routes/Health"
import readiness  from "./routes/Readiness"

const app = express();
const port = process.env.APP_PORT || 3001;

app.use(genericRouter);
app.use(start);
app.use(health);
app.use(readiness);

app.listen(port, () => {
  console.log(`Servidor TS escuchando en http://localhost:${port}`);
});