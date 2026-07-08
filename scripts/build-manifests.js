#!/usr/bin/env node
// Regenerates docs/quadrants/{folder}/index.json for every quadrant by
// scanning each folder for .md files and writing a sorted JSON array.
//
// Called automatically by the GitHub Actions deploy workflow on every push
// to master. Can also be run locally after adding or removing entry files:
//   node scripts/build-manifests.js

'use strict';

const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');
const config = JSON.parse(fs.readFileSync(path.join(docsDir, 'config.json'), 'utf8'));

for (const quadrant of config.quadrants) {
  const folderPath = path.join(docsDir, 'quadrants', quadrant.folder);
  const files = fs.readdirSync(folderPath)
    .filter(f => f.endsWith('.md'))
    .sort();
  fs.writeFileSync(
    path.join(folderPath, 'index.json'),
    JSON.stringify(files, null, 2) + '\n'
  );
  console.log(`${quadrant.folder}: ${files.length} entries`);
}
