const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");
const courses = require("./courses.json");
const coursePages = require("./coursePages.js");

const coursePageSlugsById = new Map([
  ["ucsd-math-170c-spring-2007", "math170c"],
  ["ucsd-math-20f-winter-2007", "math20f"]
]);

function legacySlug(course) {
  if (!course) return "";
  if (course.oldFolder) return course.oldFolder.toLowerCase();
  if (coursePageSlugsById.has(course.id)) return coursePageSlugsById.get(course.id);
  if (course.url && course.url.startsWith("/legacy/courses/")) {
    return course.url.replace(/^\/legacy\/courses\//, "").replace(/\/$/, "").toLowerCase();
  }
  return "";
}

function humanLabel(file) {
  return path
    .basename(file, path.extname(file))
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])(\d)/gi, "$1 $2")
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
  .filter((course) => legacySlug(course) && ((course.url && course.url.startsWith("/legacy/courses/")) || coursePages[legacySlug(course)]))
  .map((course) => {
    const slug = legacySlug(course);
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
      url: course.url || `/legacy/courses/${slug}/`,
      slug,
      archiveContent: coursePages[slug] || {},
      courseFiles: filesIn(courseDir, `/legacy/courses/${slug}`),
      noteFiles: notes,
      hasArchiveContent: Boolean(coursePages[slug])
    };
  });
