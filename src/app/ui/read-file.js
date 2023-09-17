import fs from "fs";
import path from "path";

const root = process.cwd();
export const GetFileBySlug = ({filename}) =>{

    const source = fs.readFileSync(
        path.join(root, filename),
        "utf-8");
        return source
}