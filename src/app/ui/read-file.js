import { readFileSync } from "fs";
import path from "path";

export const GetFileBySlug = ({ filename }) => {
  const file = path.join(process.cwd(), filename);
  const data = readFileSync(file, "utf-8");
  return data;
};
