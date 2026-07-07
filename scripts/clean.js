const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "..", "_site");

fs.rmSync(outputDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
console.log("Removed _site/");
