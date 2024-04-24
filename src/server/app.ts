import express, { Application } from "express";
import path from "path";
import cors from "cors";
import fileRoutes from "./routes/file.routes";
import uploadRoutes from "./routes/upload.routes";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.route("/").get((req, res) => {
  res.json("hello");
});

app.use("/image", express.static(path.resolve(__dirname, "../../public")));
app.use("/files", fileRoutes);
app.use("/upload", uploadRoutes);

export default app;
