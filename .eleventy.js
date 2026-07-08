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
    const linkedLabel = nowAt.url ? `<a href="${escapeHtml(nowAt.url)}">${label}</a>` : label;
    const note = nowAt.note ? `<span class="now-at-note">${escapeHtml(nowAt.note)}</span>` : "";
    return `${linkedLabel}${note}`;
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
