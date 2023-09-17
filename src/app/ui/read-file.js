import { readFileSync } from "fs";
import path from "path";

export const GetFileBySlug = ({ filename }) => {
  const file = path.resolve(process.cwd(), filename);
  const data = readFileSync(file, "utf-8");
  return data;
};
