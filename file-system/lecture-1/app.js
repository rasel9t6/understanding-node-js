import { readFileSync } from "node:fs";

const content = readFileSync("./text.txt");

console.log(content.toString("utf-8"));
