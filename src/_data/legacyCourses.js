const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");
const courses = require("./courses.json");

function humanLabel(file) {
  return path
    .basename(file, path.extname(file))
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function filesIn(dir, publicPrefix) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => ({
      label: humanLabel(entry.name),
      url: `${publicPrefix}/${entry.name}`,
      kind: path.extname(entry.name).replace(".", "").toLowerCase()
    }))
    .sort((a, b) => a.url.localeCompare(b.url));
}

module.exports = courses
  .filter((course) => course.oldFolder && course.url && course.url.startsWith("/legacy/courses/"))
  .map((course) => {
    const slug = course.oldFolder.toLowerCase();
    const courseDir = path.join(root, "public", "legacy", "courses", slug);
    const notesDir = path.join(root, "public", "legacy", "notes");
    const notePrefix = `${slug}-`;
    const notes = fs.existsSync(notesDir)
      ? fs
          .readdirSync(notesDir, { withFileTypes: true })
          .filter((entry) => entry.isFile() && entry.name.toLowerCase().startsWith(notePrefix))
          .map((entry) => ({
            label: humanLabel(entry.name.replace(new RegExp(`^${slug}-`, "i"), "")),
            url: `/legacy/notes/${entry.name}`,
            kind: path.extname(entry.name).replace(".", "").toLowerCase()
          }))
          .sort((a, b) => a.url.localeCompare(b.url))
      : [];

    return {
      ...course,
      slug,
      courseFiles: filesIn(courseDir, `/legacy/courses/${slug}`),
      noteFiles: notes
    };
  });
