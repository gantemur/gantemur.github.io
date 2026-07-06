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
