import express, { Application } from "express";
const app: Application = express();

app.route("/").get((req, res) => {
  res.json("hello");
});

export default app;
