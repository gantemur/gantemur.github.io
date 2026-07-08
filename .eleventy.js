module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ public: "." });

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
