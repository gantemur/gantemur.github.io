"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const out = path.resolve(__dirname, "..", "_site");
const html = (route) => fs.readFileSync(path.join(out, route, "index.html"), "utf8");
const matchCount = (value, regex) => (value.match(regex) || []).length;

const routes = ["", "research", "publications", "teaching", "notes", "software", "contact", "supervision"];
for (const route of routes) {
  const content = html(route);
  assert.equal(matchCount(content, /gantemur-home\.goatcounter\.com\/count/g), 1,
    `Academic page ${route || "/"} must include the homepage counter once`);
  assert.equal(matchCount(content, /gc\.zgo\.at\/count\.js/g), 1,
    `Academic page ${route || "/"} must load the counter script once`);
  assert.doesNotMatch(content, /gantemur-cal\.goatcounter\.com\/count/);
}

const cal = html("cal");
assert.equal(matchCount(cal, /gantemur-cal\.goatcounter\.com\/count/g), 1,
  "Existing calendar tracker must remain intact");
assert.doesNotMatch(cal, /gantemur-home\.goatcounter\.com\/count/,
  "Academic tracker must not be installed on the calendar page");

const home = html("");
console.log("DEBUG featured click events:",
  [...home.matchAll(/data-goatcounter-click="([^"]+)"/g)]
    .map((m) => m[1]).filter((x) => x.startsWith("home-paper")).slice(0, 16));
console.log("DEBUG AFEM anchor:",
  home.match(/<a href="https:\/\/arxiv\.org\/abs\/2611\.11668"[^>]*>[^<]*<\/a>/)?.[0] || "(not matched)");
for (const event of [
  "home-research", "home-publications", "home-calendar", "home-calendar-mn",
  "home-teaching", "home-notes", "home-software", "home-sol", "home-caltib",
  "home-paper-gantumur-optimal-afem-w1p-2026-arxiv",
  "home-paper-gantumur-dynamical-lattice-regulators-jhep-2026-doi"
]) {
  assert.ok(home.includes(`data-goatcounter-click="${event}"`), `Missing homepage event ${event}`);
}
assert.ok(home.includes('window.location.hostname !== "gantemur.github.io"'),
  "Tracking should only load on the live production hostname");
assert.ok(home.includes("window.location.pathname ||"),
  "Pageview path should omit query strings");

const publications = html("publications");
assert.doesNotMatch(publications, /data-goatcounter-click="home-paper-/,
  "The full bibliography should not have home-only featured-paper events");

const sw = html("software");
for (const event of [
  "software-caltib-project", "software-caltib-web-calendar", "software-caltib-diagnostics",
  "software-caltib-subscriptions", "software-sol-project", "software-sol-planets-en",
  "software-sol-planets-mn", "software-sol-doppler", "software-sol-kinetic",
  "software-sol-armature", "software-lang-mn"
]) {
  assert.ok(sw.includes(`data-goatcounter-click="${event}"`), `Missing Software event ${event}`);
}
const notes = html("notes");
for (const id of ["notes-analysis-pdf", "notes-complex-pdf", "notes-pde-pdf"]) {
  assert.ok(notes.includes(`data-goatcounter-click="${id}"`));
}
assert.ok(html("teaching").includes('data-goatcounter-click="teaching-course"'));
for (const id of ["contact-github", "contact-blog"]) {
  assert.ok(html("contact").includes(`data-goatcounter-click="${id}"`));
}

for (const route of routes) {
  const content = html(route);
  const names = [...content.matchAll(/data-goatcounter-click="([^"]+)"/g)].map((m) => m[1]);
  for (const name of names) {
    assert.match(name, /^[a-z0-9][a-z0-9-]*$/, `Invalid event name on ${route || "/"}: ${name}`);
  }
}

console.log("GoatCounter: academic pages, selected events, and calendar isolation verified.");
