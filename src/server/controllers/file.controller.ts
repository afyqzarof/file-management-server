import fileModel from "../models/file.model";
import { Request, Response } from "express";

const getAll = async (_req: Request, res: Response) => {
  try {
    const images = await fileModel.getAll();
    res.json(images);
  } catch (error) {
    res.json(error);
  }
};

export default { getAll };
