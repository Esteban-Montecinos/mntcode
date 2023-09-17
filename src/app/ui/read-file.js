import { readFileSync } from "fs";
import path from "path";

const file = path.resolve(process.cwd(), "src","app","docs","components");
export const GetFileBySlug = ({ filename }) => {
    const filePath = path.join(file, filename);
  const data = readFileSync(filePath, "utf-8");
  return data;
};
