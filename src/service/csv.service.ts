import fs from "fs";
import readline from "readline";
import { csvModel } from "../models/csv.model";

export const uploadCSV = async (filePath: string) => {
  const readStream = fs.createReadStream(filePath);
//   readStream.on("error", (error) => console.log(error.message));
  //   readStream.on("data", (chunk) => (data += chunk));
//   readStream.on("end", () => console.log("Reading complete"));
  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });
  rl.on("error", (error) => console.log(error.message));
  rl.on("close", () => {
    console.log("Data parsing completed");
  });
  for await (const line of rl) {
    const newRecord = new csvModel({
      line: line.trim(),
    });
    await newRecord.save();
  }
  console.log("CSV upload complete");
};
