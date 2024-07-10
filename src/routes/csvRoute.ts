import express, { Request, Response } from "express";
import path from "path";
import * as csvServices from '../service/csv.service';

const router = express.Router();
const filePath = path.join(__dirname, "../sample.csv");

router.post("/upload", async (req: Request, res: Response) => {
  const path = decodeURIComponent(filePath);

  try {
    await csvServices.uploadCSV(path);
    res.status(200).send("CSV upload complete");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

export default router;
