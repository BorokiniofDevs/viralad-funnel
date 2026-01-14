import fs from "fs";
import path from "path";

export function appendToCSV(
  filePath: string,
  headers: string[],
  row: string[]
) {
  const exists = fs.existsSync(filePath);

  if (!exists) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, headers.join(",") + "\n");
  }

  fs.appendFileSync(filePath, row.join(",") + "\n");
}
