module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ public: "." });

  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const normalizeName = (value) =>
    String(value || "")
      .replace(/^(prof\.|dr\.)\s+/i, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toLowerCase();

  const advisorUrls = new Map([
    ["choksi", "http://www.math.mcgill.ca/~rchoksi/"],
    ["fried", "https://groups.oist.jp/mmmu/eliot-fried"],
    ["jakobson", "http://www.math.mcgill.ca/~jakobson/"],
    ["mei", "http://www.math.mcgill.ca/~mei/"],
    ["nave", "http://www.math.mcgill.ca/~jcnave/"],
    ["vetois", "http://www.math.mcgill.ca/vetois/"]
  ]);

  eleventyConfig.addFilter("where", function (items, key, value) {
    if (!Array.isArray(items)) return [];
    return items.filter((item) => item && item[key] === value);
  });

  eleventyConfig.addFilter("limit", function (items, count) {
    if (!Array.isArray(items)) return [];
    return items.slice(0, count);
  });

  eleventyConfig.addFilter("languages", function (item) {
    if (!item) return "";
    if (Array.isArray(item.languages)) return item.languages.join(", ");
    return item.language || "";
  });

  function courseTermLabel(course) {
    return (
      (course && course.displayTerm) ||
      (course && course.period) ||
      (course && course.term && course.term.label) ||
      ""
    );
  }

  function courseYear(course) {
    const explicitYear = Number(course && course.year);
    if (Number.isFinite(explicitYear)) return explicitYear;
    const match = courseTermLabel(course).match(/\d{4}/);
    return match ? Number(match[0]) : 0;
  }

  function courseTermOrder(course) {
    const label = courseTermLabel(course).toLowerCase();
    if (/fall|autumn/.test(label)) return 1;
    if (/summer|summ/.test(label)) return 2;
    if (/spring/.test(label)) return 3;
    if (/winter|wint/.test(label)) return 4;
    return 5;
  }

  eleventyConfig.addFilter("teachingArchive", function (items) {
    if (!Array.isArray(items)) return [];
    return [...items].sort((a, b) => {
      return (
        courseYear(b) - courseYear(a) ||
        courseTermOrder(a) - courseTermOrder(b) ||
        String(a.code || "").localeCompare(String(b.code || "")) ||
        String(a.title || "").localeCompare(String(b.title || ""))
      );
    });
  });

  eleventyConfig.addFilter("courseTerm", courseTermLabel);

  eleventyConfig.addFilter("courseInstitution", function (course) {
    if (!course) return "";
    if (course.institutionShort) return course.institutionShort;
    if (course.institution === "McGill University") return "McGill";
    if (course.institution === "University of California, San Diego") return "UCSD";
    if (course.institution === "Utrecht University") return "Utrecht";
    if (course.institution === "National University of Mongolia") return "NUM";
    if (course.institution === "Mongolian Academy of Sciences") return "MAS";
    if (course.institution) return course.institution;
    if (/^\/legacy\/courses\/math(?:170c|20f)\//i.test(course.url || "")) return "UCSD";
    if (String(course.id || "").startsWith("other-")) return "Utrecht";
    return "";
  });

  eleventyConfig.addFilter("courseCode", function (course) {
    if (!course) return "";
    if (course.code) return course.code;
    if (["CIMPA", "Mongolian Academy of Sciences"].includes(course.institution)) return "Short course";
    return "";
  });

  eleventyConfig.addFilter("localCourseUrl", function (course) {
    if (!course) return "";
    if (course.url && course.url.startsWith("/")) return course.url;
    if (course.id === "ucsd-math-170c-spring-2007") return "/legacy/courses/math170c/";
    if (course.id === "ucsd-math-20f-winter-2007") return "/legacy/courses/math20f/";
    return "";
  });

  eleventyConfig.addFilter("teachingRoleNote", function (course) {
    if (!course || !course.role) return "";
    const role = String(course.role).trim();
    const ordinaryRoles = new Set(["instructor", "sole instructor", "lecturer", "professor"]);
    if (ordinaryRoles.has(role.toLowerCase())) return "";

    let note = escapeHtml(role);
    if (course.roleNote) note += `; ${escapeHtml(course.roleNote)}`;

    const instructor = course.instructorOfRecord;
    if (instructor && instructor.name) {
      const name = escapeHtml(instructor.name);
      const lecturer = instructor.url
        ? `<a href="${escapeHtml(instructor.url)}">${name}</a>`
        : name;
      note += `. Lecturer: ${lecturer}`;
    }

    return note;
  });

  eleventyConfig.addFilter("studentRelationships", function (items, relationships) {
    if (!Array.isArray(items)) return [];
    const wanted = new Set(String(relationships).split(",").map((item) => item.trim()));
    return items.filter((item) => item && wanted.has(item.relationship));
  });

  eleventyConfig.addFilter("byStudentYear", function (items) {
    if (!Array.isArray(items)) return [];
    const sortYear = (item) => {
      if (Number.isFinite(Number(item.year))) return Number(item.year);
      if (String(item.status || "").toLowerCase().includes("current")) return Number.POSITIVE_INFINITY;
      const match = String(item.period || "").match(/(\d{4})(?!.*\d{4})/);
      return match ? Number(match[1]) : 0;
    };
    return [...items].sort((a, b) => sortYear(b) - sortYear(a) || String(a.name || "").localeCompare(String(b.name || "")));
  });

  eleventyConfig.addFilter("hasNowAt", function (items) {
    return Array.isArray(items) && items.some((item) => item && item.nowAt && item.nowAt.label);
  });

  eleventyConfig.addFilter("renderNowAt", function (item) {
    const nowAt = item && item.nowAt;
    if (!nowAt || !nowAt.label) return '<span class="now-at-empty">-</span>';
    const label = escapeHtml(nowAt.label);
    const note = nowAt.note ? `<span class="now-at-note">${escapeHtml(nowAt.note)}</span>` : "";
    return `${label}${note}`;
  });

  eleventyConfig.addFilter("formatPeriod", function (value) {
    return escapeHtml(value || "").replace(/(\d{4})-(\d{4})/g, "$1&#8211;$2");
  });

  eleventyConfig.addFilter("linkedPersonName", function (item) {
    if (!item || !item.name) return "";
    const normalizedName = normalizeName(item.name);
    const profileUrl =
      item.profileUrl ||
      item.personUrl ||
      item.homepageUrl ||
      item.homepage ||
      (Array.isArray(item.links)
        ? (item.links.find((link) => normalizeName(link.label) === normalizedName) || {}).url
        : null) ||
      (item.nowAt && item.nowAt.url);
    const label = escapeHtml(item.name);
    return profileUrl ? `<a href="${escapeHtml(profileUrl)}">${label}</a>` : label;
  });

  eleventyConfig.addFilter("linkedCoSupervisors", function (item) {
    if (!item || !Array.isArray(item.coSupervisors)) return "";
    return item.coSupervisors.map((name) => {
      const normalizedName = normalizeName(name);
      const recordLink = Array.isArray(item.links)
        ? item.links.find((link) => normalizeName(link.label).includes(normalizedName))
        : null;
      const url = recordLink ? recordLink.url : advisorUrls.get(normalizedName);
      const label = escapeHtml(name);
      return url ? `<a href="${escapeHtml(url)}">${label}</a>` : label;
    }).join(", ");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
