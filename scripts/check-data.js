const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dataDir = path.join(root, "src", "_data");
const requiredData = [
  "site.json",
  "navigation.json",
  "research.json",
  "publications.json",
  "courses.json",
  "notes.json",
  "students.json",
  "talks.json",
  "software.json",
  "cv.json"
];
const requiredPages = [
  "index.njk",
  "research.njk",
  "publications.njk",
  "teaching.njk",
  "notes.njk",
  "students.njk",
  "software.njk",
  "contact.njk"
];

let failures = 0;

for (const file of requiredData) {
  const fullPath = path.join(dataDir, file);
  try {
    JSON.parse(fs.readFileSync(fullPath, "utf8"));
    console.log(`ok data ${file}`);
  } catch (error) {
    failures += 1;
    console.error(`bad data ${file}: ${error.message}`);
  }
}

for (const file of requiredPages) {
  const fullPath = path.join(root, "src", file);
  if (fs.existsSync(fullPath)) {
    console.log(`ok page ${file}`);
  } else {
    failures += 1;
    console.error(`missing page ${file}`);
  }
}

if (failures > 0) {
  process.exitCode = 1;
}
