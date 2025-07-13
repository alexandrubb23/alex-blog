import fs from "fs";
import path from "path";

// Read package.json
const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));

const getVersion = (pkgName) => {
  const version = pkg.dependencies?.[pkgName] || pkg.devDependencies?.[pkgName];
  return version?.replace(/^[~^]/, ""); // remove ^ or ~
};

// Badge config
const badges = [
  {
    name: "Next.js",
    pkg: "next",
    color: "blueviolet",
    url: "https://nextjs.org/",
    logo: "next.js",
  },
  {
    name: "React Query",
    pkg: "@tanstack/react-query",
    color: "green",
    url: "https://react-query.tanstack.com/",
    logo: "react-query",
    logoColor: "white",
  },
  {
    name: "Chakra UI",
    pkg: "@chakra-ui/react",
    color: "ff69b4",
    url: "https://chakra-ui.com/",
    logo: "chakraui",
  },
  {
    name: "Planetscale Serverless MySQL",
    pkg: "@planetscale/database",
    color: "blue",
    url: "https://planetscale.com",
    logo: "planetscale",
  },
  {
    name: "Drizzle ORM",
    pkg: "drizzle-orm",
    color: "green",
    url: "https://github.com/drizzle-team/drizzle-orm",
    logo: "drizzle",
  },
  {
    name: "Zod",
    pkg: "zod",
    color: "3E67B1",
    url: "https://github.com/colinhacks/zod",
    logo: "zod",
  },
  {
    name: "React Hook Form",
    pkg: "react-hook-form",
    color: "EC5990",
    url: "https://github.com/react-hook-form/react-hook-form",
    logo: "react",
  },
];

// Read README
const readmePath = path.resolve("README.md");
let readme = fs.readFileSync(readmePath, "utf-8");

for (const badge of badges) {
  const version = getVersion(badge.pkg);
  if (!version) {
    console.warn(`⚠️  Version not found for ${badge.pkg}`);
    continue;
  }

  const encodedName = encodeURIComponent(badge.name); // This includes %20
  const badgeRegex = new RegExp(
    `\\[!\\[${badge.name.replace(
      /[-[\]/{}()*+?.\\^$|]/g,
      "\\$&",
    )}\\]\\(https:\\/\\/img\\.shields\\.io\\/badge\\/${encodedName}-[^-\\)]+-${
      badge.color
    }(\\?[^\\)]*)?\\)\\]\\(${badge.url.replace(/\//g, "\\/")}\\)`,
  );

  const queryParams = [];
  if (badge.logo) queryParams.push(`logo=${badge.logo}`);
  if (badge.logoColor) queryParams.push(`logoColor=${badge.logoColor}`);

  const queryString = queryParams.length ? `?${queryParams.join("&")}` : "";
  const newBadge = `[![${badge.name}](https://img.shields.io/badge/${encodedName}-${version}-${badge.color}${queryString})](${badge.url})`;

  const updatedReadme = readme.replace(badgeRegex, newBadge);
  if (updatedReadme !== readme) {
    readme = updatedReadme;
    console.log(`✅ Updated ${badge.name} to ${version}`);
  } else {
    console.warn(`❌ Could not match badge for ${badge.name}`);
  }
}

// Save updated README
fs.writeFileSync(readmePath, readme);
console.log("📄 README.md updated!");
