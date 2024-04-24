import express, { Application } from "express";
import path from "path";
import fileRoutes from "./routes/file.routes";

const app: Application = express();

app.route("/").get((req, res) => {
  res.json("hello");
});

app.use("/image", express.static(path.resolve(__dirname, "../../public")));
app.use("/files", fileRoutes);

export default app;
