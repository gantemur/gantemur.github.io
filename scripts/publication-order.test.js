const test = require("node:test");
const assert = require("node:assert/strict");

const filters = new Map();
require("../.eleventy.js")({
  addPassthroughCopy() {},
  addFilter(name, filter) { filters.set(name, filter); }
});

const journalOrder = filters.get("publicationPublishedAndAccepted");
const preprintOrder = filters.get("publicationPreprints");

test("accepted papers use acceptance years, not earlier arXiv years", () => {
  const items = [
    { id: "gerard", title: "Generated Jacobian", status: "accepted", year: 2021, acceptedYear: 2026, arxiv: "2110.03084" },
    { id: "published-2025", title: "Published 2025", status: "published", year: 2025, publishedDate: "2025-10-01" },
    { id: "published-2026", title: "Published online 2026", status: "published", year: 2027, publishedDate: "2026-11-17" },
    { id: "accepted-dated", title: "Accepted October", status: "accepted", year: 2020, acceptedDate: "2026-10-20", arxiv: "2010.00123" },
    { id: "accepted-same-year", title: "Zeta accepted", status: "accepted", year: 2025, acceptedYear: 2026, arxiv: "2512.12345" },
    { id: "preprint", title: "Preprint", status: "preprint", year: 2026, arxiv: "2611.11668" }
  ];
  assert.deepEqual(journalOrder(items).map((item) => item.id), [
    "published-2026", "accepted-dated", "gerard", "accepted-same-year", "published-2025"
  ]);
  assert.deepEqual(preprintOrder(items).map((item) => item.id), ["preprint"]);
});

test("year-only accepted papers are not ordered by their arXiv identifiers", () => {
  const items = [
    { id: "zeta", title: "Zeta", status: "accepted", year: 2017, acceptedYear: 2026, arxiv: "2512.99999" },
    { id: "alpha", title: "Alpha", status: "accepted", year: 2021, acceptedYear: 2026, arxiv: "2110.00001" }
  ];
  assert.deepEqual(journalOrder(items).map((item) => item.id), ["alpha", "zeta"]);
});

test("real Gérard Awanou paper is grouped with 2026 articles", () => {
  const records = require("../src/_data/publications.json");
  const ordered = journalOrder(records);
  const paper = records.find((record) => record.id === "awanou-gantumur-generated-jacobian-weak-solutions-2021");
  assert.ok(paper);
  assert.equal(paper.status, "accepted");
  assert.equal(paper.acceptedYear, 2026);
  assert.ok(ordered.some((record) => record.id === paper.id));
  const index = ordered.findIndex((record) => record.id === paper.id);
  const older = ordered.findIndex((record) => record.id === "gantumur-adaptive-mixed-fem-stokes-2014");
  assert.ok(index >= 0 && older >= 0 && index < older);
});
