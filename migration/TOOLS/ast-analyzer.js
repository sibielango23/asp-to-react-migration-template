#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");

const targetDir = process.argv[2];
if (!targetDir) {
  console.error("Usage: node ast-analyzer.js <asp-directory>");
  process.exit(1);
}

const absoluteDir = path.resolve(targetDir);
if (!fs.existsSync(absoluteDir)) {
  console.error(`Directory not found: ${absoluteDir}`);
  process.exit(1);
}

const aspFiles = fs
  .readdirSync(absoluteDir)
  .filter((file) => file.toLowerCase().endsWith(".asp"));

const summary = aspFiles.map((file) => {
  const content = fs.readFileSync(path.join(absoluteDir, file), "utf8");
  return {
    file,
    hasSql: /select|insert|update|delete/i.test(content),
    hasRequestUsage: /request\./i.test(content),
    hasResponseUsage: /response\./i.test(content),
  };
});

console.log(JSON.stringify(summary, null, 2));

