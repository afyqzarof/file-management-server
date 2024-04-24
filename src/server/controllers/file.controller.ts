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
const getOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const images = await fileModel.getOne(id);
    res.json(images);
  } catch (error) {
    res.json(error);
  }
};
const updateOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;

  if (!name || !description) {
    return res.json("please have full body");
  }
  try {
    const images = await fileModel.updateOne(id, name, description);
    res.json(images);
  } catch (error) {
    res.json(error);
  }
};

const deleteOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const images = await fileModel.deleteOne(id);
    res.json(images);
  } catch (error) {
    res.json(error);
  }
};

export default { getAll, getOne, updateOne, deleteOne };
