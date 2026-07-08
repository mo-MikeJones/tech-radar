#!/usr/bin/env node
// One-time migration script: reads the current docs/config.json (which contains
// all entries) and writes a per-entry Markdown file into the appropriate
// docs/quadrants/{folder}/ directory.
//
// Run BEFORE trimming config.json:
//   node scripts/generate-entries.js

'use strict';

const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');
const config = JSON.parse(fs.readFileSync(path.join(docsDir, 'config.json'), 'utf8'));

const quadrantFolders = ['languages', 'infrastructure', 'datastores', 'data-management'];

function toSlug(label) {
  return label
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Ensure all quadrant directories exist
for (const folder of quadrantFolders) {
  fs.mkdirSync(path.join(docsDir, 'quadrants', folder), { recursive: true });
}

let count = 0;
for (const entry of config.entries) {
  const folder = quadrantFolders[entry.quadrant];
  if (!folder) {
    console.warn(`Unknown quadrant ${entry.quadrant} for "${entry.label}", skipping`);
    continue;
  }

  const filename = toSlug(entry.label) + '.md';
  const filePath = path.join(docsDir, 'quadrants', folder, filename);

  const lines = ['---'];
  lines.push(`ring: ${entry.ring}`);
  lines.push(`label: ${entry.label}`);
  if (entry.link) lines.push(`link: ${entry.link}`);
  lines.push(`active: ${entry.active}`);
  lines.push(`moved: ${entry.moved}`);
  lines.push('---');

  fs.writeFileSync(filePath, lines.join('\n') + '\n');
  console.log(`  ${folder}/${filename}`);
  count++;
}

console.log(`\nCreated ${count} entry files.`);
