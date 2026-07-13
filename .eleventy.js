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

  function compactLinkLabel(label) {
    const clean = String(label || "").toLowerCase();
    if (clean.includes("arxiv")) return "arXiv";
    if (clean.includes("doi")) return "DOI";
    if (clean.includes("correction")) return "correction";
    if (clean.includes("pdf") || clean.includes("download") || clean.includes("main part")) return "pdf";
    if (clean.includes("journal")) return "journal";
    return clean.replace(/\s*\([^)]*\)\s*/g, " ").replace(/\s+/g, " ").trim() || "link";
  }

  function thesisLinkLabel(label) {
    return String(label || "link")
      .replace(/\s*\([^)]*\)\s*/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function isThesis(pub) {
    return ["status", "category", "type"].some((key) => String(pub && pub[key]).toLowerCase() === "thesis");
  }

  function isPreprint(pub) {
    return ["status", "category", "type"].some((key) => String(pub && pub[key]).toLowerCase() === "preprint");
  }

  function hasParenthesizedYear(value) {
    return /\(\d{4}\)/.test(String(value || ""));
  }

  function arxivUrl(pub, links) {
    const arxiv = Array.isArray(links) ? links.find((link) => link && /arxiv/i.test(link.label || "")) : null;
    return arxiv ? arxiv.url : pub && pub.arxiv ? `https://arxiv.org/abs/${pub.arxiv}` : "";
  }

  function publicationKind(pub) {
    return ["status", "category", "type"]
      .map((key) => (pub && pub[key] ? String(pub[key]).toLowerCase() : ""))
      .filter(Boolean);
  }

  function hasPublicationKind(pub, kinds) {
    return publicationKind(pub).some((kind) => kinds.has(kind));
  }

  function publicationYear(pub) {
    const year = Number(pub && pub.year);
    return Number.isFinite(year) ? year : 0;
  }

  function publicationDateValue(pub) {
    for (const key of ["publishedDate", "date", "publicationDate"]) {
      const time = Date.parse(pub && pub[key]);
      if (Number.isFinite(time)) return time;
    }
    const year = publicationYear(pub);
    return year ? Date.UTC(year, 11, 31) : 0;
  }

  function arxivId(pub) {
    return String(
      (pub && pub.arxiv) ||
      String((pub && pub.details) || "").match(/arxiv:([^\s()]+)/i)?.[1] ||
      ""
    ).trim();
  }

  function arxivSortValue(pub) {
    const id = arxivId(pub);
    const modern = id.match(/^(\d{2})(\d{2})\.(\d+)/);
    if (modern) {
      const yy = Number(modern[1]);
      const year = yy >= 90 ? 1900 + yy : 2000 + yy;
      return year * 100000000 + Number(modern[2]) * 1000000 + Number(modern[3]);
    }
    const digits = id.replace(/\D/g, "");
    return digits ? Number(digits.slice(0, 12)) : 0;
  }

  function publicationTitleCompare(a, b) {
    return String((a && a.title) || "").localeCompare(String((b && b.title) || ""));
  }

  function sortPublicationSection(items, kinds, compare) {
    if (!Array.isArray(items)) return [];
    return items.filter((pub) => hasPublicationKind(pub, kinds)).sort(compare);
  }

  function authorSortKey(author) {
    const sortName = author && author.sortName;
    if (sortName) return normalizeName(sortName);
    const name = String((author && author.name) || author || "");
    const parts = name.trim().split(/\s+/).filter(Boolean);
    return normalizeName(parts.length ? parts[parts.length - 1] : name);
  }

  function isSelfAuthor(author) {
    return Boolean(author && (author.self === true || author.id === "tsogtgerel-gantumur"));
  }

  function renderAuthorLink(author) {
    const name = escapeHtml(author.name);
    return author.url ? `<a href="${escapeHtml(author.url)}">${name}</a>` : name;
  }

  function formatLinkedNameList(authors) {
    const rendered = authors.map(renderAuthorLink);
    if (rendered.length <= 1) return rendered[0] || "";
    if (rendered.length === 2) return `${rendered[0]} and ${rendered[1]}`;
    return `${rendered.slice(0, -1).join(", ")}, and ${rendered[rendered.length - 1]}`;
  }

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

  eleventyConfig.addFilter("publicationCoauthors", function (pub) {
    if (!pub || !Array.isArray(pub.authors)) return "";
    const coauthors = pub.authors.filter((author) => author && author.name && !isSelfAuthor(author));
    if (!coauthors.length) return "";
    return `with ${formatLinkedNameList(coauthors)}.`;
  });

  eleventyConfig.addFilter("publicationCitation", function (pub) {
    if (!pub) return "";
    const links = Array.isArray(pub.links) ? pub.links : [];
    if (isPreprint(pub)) {
      const arxivId = pub.arxiv || String(pub.details || "").match(/arxiv:([^\s()]+)/i)?.[1];
      if (arxivId) {
        const label = `arXiv:${escapeHtml(arxivId)}`;
        const linked = arxivUrl(pub, links) ? `<a href="${escapeHtml(arxivUrl(pub, links))}">${label}</a>` : label;
        return `${linked}${pub.year ? ` (${escapeHtml(pub.year)})` : ""}.`;
      }
      if (pub.details) return `${escapeHtml(pub.details).replace(/\.$/, "")}.`;
      return pub.year ? `${escapeHtml(pub.year)}.` : "";
    }

    if (isThesis(pub)) {
      const details = String(pub.details || "")
        .split(/\s*,\s*/)
        .map((part) => part.trim())
        .filter(Boolean);
      if (/^phd thesis$/i.test(details[0] || "") && details.length >= 5) {
        const formatted = [
          details[0],
          `${details[1]}, ${details[2]}`,
          ...details.slice(3)
        ].map(escapeHtml);
        return `${formatted.join(". ")}.`;
      }
      const formatted = details.map(escapeHtml);
      return formatted.length ? `${formatted.join(". ")}.` : pub.year ? `${escapeHtml(pub.year)}.` : "";
    }

    if (pub.citation) {
      return `${escapeHtml(pub.citation).replace(/\.$/, "")}.`;
    }

    const pieces = [];
    const details = pub.details || pub.journalDetails || pub.articleNumber || "";
    if (pub.venue && details) pieces.push(`<em>${escapeHtml(pub.venue)}</em>, ${escapeHtml(details)}`);
    else if (details) pieces.push(escapeHtml(details));
    else if (pub.venue) pieces.push(`<em>${escapeHtml(pub.venue)}</em>`);
    if (pub.year && !hasParenthesizedYear(details)) pieces.unshift(escapeHtml(pub.year));
    return pieces.length ? `${pieces.join(". ")}.` : "";
  });

  eleventyConfig.addFilter("publicationLinks", function (pub) {
    if (!pub) return [];
    const links = Array.isArray(pub.links) ? pub.links : [];
    const out = [];
    const seen = new Set();
    const add = (label, url) => {
      if (!url || seen.has(url)) return;
      seen.add(url);
      out.push({ label, url });
    };
    const findLink = (pattern) => links.find((link) => link && pattern.test(link.label || ""));

    if (isThesis(pub)) {
      for (const link of links) {
        if (!link) continue;
        add(thesisLinkLabel(link.label), link.url);
      }
      return out;
    }

    if (isPreprint(pub) && pub.arxiv) {
      for (const link of links) {
        if (!link || /arxiv/i.test(link.label || "")) continue;
        add(compactLinkLabel(link.label), link.url);
      }
      return out;
    }

    const arxiv = findLink(/arxiv/i);
    add("arXiv", arxiv ? arxiv.url : pub.arxiv ? `https://arxiv.org/abs/${pub.arxiv}` : "");

    const journal = findLink(/journal/i) || links.find((link) => link && !/arxiv|doi|pdf|download/i.test(link.label || "") && /^https?:/i.test(link.url || ""));
    add(journal ? compactLinkLabel(journal.label) : "journal", journal && journal.url);

    const doi = findLink(/doi/i);
    add("DOI", doi ? doi.url : pub.doi ? `https://doi.org/${pub.doi}` : "");

    for (const link of links) {
      if (!link || !/pdf|download|main part/i.test(link.label || "")) continue;
      add("pdf", link.url);
    }

    for (const link of links) {
      if (!link || /arxiv|journal|doi|pdf|download|main part/i.test(link.label || "")) continue;
      add(compactLinkLabel(link.label), link.url);
    }

    return out;
  });

  eleventyConfig.addFilter("publicationCollaborators", function (items) {
    if (!Array.isArray(items)) return [];

    const collaborators = new Map();
    const add = (author) => {
      if (!author || !author.name || isSelfAuthor(author)) return;
      const key = author.id || author.name;
      if (!key) return;
      const existing = collaborators.get(key);
      if (existing) {
        if (!existing.url && author.url) existing.url = author.url;
        return;
      }
      collaborators.set(key, {
        id: author.id || "",
        name: author.name,
        sortName: author.sortName || "",
        url: author.url || ""
      });
    };

    for (const pub of items) {
      if (!pub || !Array.isArray(pub.authors)) continue;
      for (const author of pub.authors) {
        add(author);
      }
    }

    return [...collaborators.values()].sort((a, b) => {
      return authorSortKey(a).localeCompare(authorSortKey(b)) || a.name.localeCompare(b.name);
    });
  });

  eleventyConfig.addFilter("publicationPreprints", function (items) {
    return sortPublicationSection(items, new Set(["preprint"]), (a, b) => {
      return (
        (arxivSortValue(b) || publicationYear(b) * 100000000) -
        (arxivSortValue(a) || publicationYear(a) * 100000000) ||
        publicationTitleCompare(a, b)
      );
    });
  });

  eleventyConfig.addFilter("publicationPublishedAndAccepted", function (items) {
    return sortPublicationSection(items, new Set(["published", "accepted", "article"]), (a, b) => {
      return (
        publicationDateValue(b) - publicationDateValue(a) ||
        arxivSortValue(b) - arxivSortValue(a) ||
        publicationTitleCompare(a, b)
      );
    });
  });

  eleventyConfig.addFilter("publicationTheses", function (items) {
    return sortPublicationSection(items, new Set(["thesis"]), (a, b) => {
      return publicationDateValue(b) - publicationDateValue(a) || publicationTitleCompare(a, b);
    });
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
