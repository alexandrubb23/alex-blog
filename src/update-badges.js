import fs from 'fs';
import path from 'path';

// Read package.json
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

const getVersion = pkgName => {
  const version = pkg.dependencies?.[pkgName] || pkg.devDependencies?.[pkgName];
  return version?.replace(/^[~^]/, ''); // remove ^ or ~
};

// Badge config
const badges = [
  {
    name: 'Next.js',
    pkg: 'next',
    color: 'blueviolet',
    url: 'https://nextjs.org/',
  },
  {
    name: 'React Query',
    pkg: '@tanstack/react-query',
    color: 'green',
    url: 'https://react-query.tanstack.com/',
  },
  {
    name: 'Chakra UI',
    pkg: '@chakra-ui/react',
    color: 'ff69b4',
    url: 'https://chakra-ui.com/',
  },
  {
    name: 'Planetscale Serverless MySQL',
    pkg: '@planetscale/database',
    color: 'blue',
    url: 'https://planetscale.com',
  },
  {
    name: 'Drizzle ORM',
    pkg: 'drizzle-orm',
    color: 'green',
    url: 'https://github.com/drizzle-team/drizzle-orm',
  },
];

// Read README
const readmePath = path.resolve('README.md');
let readme = fs.readFileSync(readmePath, 'utf-8');

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
      '\\$&'
    )}\\]\\(https:\\/\\/img\\.shields\\.io\\/badge\\/${encodedName}-[^-\\)]+-${
      badge.color
    }\\)\\]\\(${badge.url.replace(/\//g, '\\/')}\\)`
  );

  const newBadge = `[![${badge.name}](https://img.shields.io/badge/${encodedName}-${version}-${badge.color})](${badge.url})`;

  const didReplace = readme.replace(badgeRegex, newBadge);
  if (didReplace !== readme) {
    readme = didReplace;
    console.log(`✅ Updated ${badge.name} to ${version}`);
  } else {
    console.warn(`❌ Could not match badge for ${badge.name}`);
  }
}

// Save updated README
fs.writeFileSync(readmePath, readme);
console.log('📄 README.md updated!');
