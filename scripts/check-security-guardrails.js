const fs = require("fs");
const path = require("path");

const repoRoot = process.cwd();
const failures = [];

function read(filePath) {
  return fs.readFileSync(path.join(repoRoot, filePath), "utf8");
}

function exists(filePath) {
  return fs.existsSync(path.join(repoRoot, filePath));
}

function assert(condition, message) {
  if (!condition) {
    failures.push(message);
  }
}

[
  "app/page.js",
  "app/layout.js",
  "app/lib/siteConfig.js",
  "app/lib/activewearData.js",
  "app/lib/sitemapData.js",
  "app/about/advertiser-disclosure/page.js",
  "app/about/editorial-policy/page.js",
  "app/about/how-we-rank-products/page.js",
  "app/about/price-and-availability/page.js",
  "app/about/image-attribution-policy/page.js",
  "app/icon.svg",
  "app/manifest.js",
  "public/og-default.svg",
  "public/twitter-card.svg",
  "vercel.json",
  ".vercelignore",
  "LAUNCH_COMMANDS.md"
].forEach((filePath) => {
  assert(exists(filePath), `Expected required ActivewearEtc file: ${filePath}`);
});

const forbiddenPatterns = [
  "TireSearchEngine",
  "tiresearchengine",
  "LiFePO4",
  "highlifepo4",
  "EV.Market",
  "TheOmega3",
  "Lipflower",
  "Apneatronics",
  "Tire Rack",
  "SimpleTire",
  "Priority Tire"
];

[
  "app/page.js",
  "app/layout.js",
  "app/lib/siteConfig.js",
  "app/lib/activewearData.js",
  "app/lib/sitemapData.js"
].forEach((filePath) => {
  const source = read(filePath);
  forbiddenPatterns.forEach((pattern) => {
    assert(!source.includes(pattern), `${filePath} must not include unrelated brand/reference: ${pattern}`);
  });
});

const siteConfig = read("app/lib/siteConfig.js");
["ActivewearEtc", "activewearetc.com", "women", "men", "activewear-university", "hello@activewearetc.com"].forEach((pattern) => {
  assert(siteConfig.includes(pattern), `Expected ActivewearEtc site config to include: ${pattern}`);
});

if (failures.length) {
  console.error("ActivewearEtc guardrail check failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("ActivewearEtc guardrail check passed.");
