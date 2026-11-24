import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I woke up allergic to my alarm clock. Doctor says avoid mornings until further notice.";

function main(): void {
  const length = [...LINE].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  for (const ch of LINE) {
    if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
      throw new Error("entry must not contain control characters");
    }
  }
  const expectedBytes = Buffer.byteLength(LINE, "utf8");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");
  const back = readFileSync(outPath, "utf8");
  if (back !== LINE) {
    throw new Error("round-trip read-back mismatch");
  }
  if (Buffer.byteLength(back, "utf8") !== expectedBytes) {
    throw new Error("written byte length does not match entry byte length");
  }
}

main();
