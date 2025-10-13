import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hola Mundo");
});

app.listen(port, () => {
  console.log(`Servidor TS escuchando en http://localhost:${port}`);
});