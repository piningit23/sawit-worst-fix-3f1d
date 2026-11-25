// Worst Fix Ever: Funniest Commit Message — entry program.
// Writes one commit message to /output/entry.txt: the engineer "fixed"
// a race condition by introducing a second one, so the original bug now
// has company and twice the chaos. Short, plain, and exactly the kind of
// line a tired engineer types at the end of a very bad day.
import { mkdirSync, writeFileSync } from "node:fs";

const COMMIT_MESSAGE =
  "fix: race condition by adding a second one to keep it company";

// Gate self-check: 1-100 characters, not whitespace-only.
const len = [...COMMIT_MESSAGE].length;
if (len < 1 || len > 100 || COMMIT_MESSAGE.trim().length === 0) {
  throw new Error(`commit message fails gate: ${len} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMMIT_MESSAGE, "utf8");
