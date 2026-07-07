const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const siteDir = path.join(root, "_site");

if (!fs.existsSync(siteDir)) {
  console.log("skip links: _site/ does not exist");
  process.exit(0);
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function targetFor(url, fromFile) {
  const clean = url.split("#")[0].split("?")[0];
  if (!clean) return null;
  if (/^(https?:|mailto:|tel:|javascript:)/i.test(clean)) return null;
  if (clean.startsWith("/")) {
    return path.join(siteDir, clean);
  }
  return path.resolve(path.dirname(fromFile), clean);
}

function existsAsStaticFile(target) {
  if (!target) return true;
  if (fs.existsSync(target) && fs.statSync(target).isFile()) return true;
  if (fs.existsSync(target) && fs.statSync(target).isDirectory() && fs.existsSync(path.join(target, "index.html"))) return true;
  if (fs.existsSync(`${target}.html`)) return true;
  if (fs.existsSync(path.join(target, "index.html"))) return true;
  return false;
}

const siteFiles = walk(siteDir);
const textExtensions = new Set([".html", ".css", ".js", ".json", ".txt", ".xml", ".svg", ".md", ".tex"]);
const htmlFiles = siteFiles.filter((file) => file.endsWith(".html"));
const broken = [];
const checked = [];
const forbiddenOldHomepage = /https?:\/\/www\.math\.mcgill\.ca\/~?gantumur\b|www\.math\.mcgill\.ca\/~?gantumur\b/i;
const forbidden = [];

for (const file of siteFiles.filter((file) => textExtensions.has(path.extname(file).toLowerCase()))) {
  const text = fs.readFileSync(file, "utf8");
  if (forbiddenOldHomepage.test(text)) forbidden.push(path.relative(root, file));
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const matches = html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g);
  for (const match of matches) {
    const ref = match[1];
    const target = targetFor(ref, file);
    if (!target) continue;
    checked.push(ref);
    if (!existsAsStaticFile(target)) {
      broken.push(`${path.relative(root, file)} -> ${ref}`);
    }
  }
}

if (forbidden.length) {
  console.error("Forbidden old McGill personal homepage references:");
  for (const item of forbidden) console.error(`- ${item}`);
  process.exit(1);
}

if (broken.length) {
  console.error(`Broken internal links (${broken.length}):`);
  for (const item of broken) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`ok links ${checked.length} internal references checked`);
