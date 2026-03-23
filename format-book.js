import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'src/content/docs/books/cultivationThroughSkinMaking1.md');
let content = fs.readFileSync(filePath, 'utf-8');

// If frontmatter already exists, don't add it again
if (!content.startsWith('---')) {
  const frontmatter = `---
title: "Путь Культивации: Создание кожи"
description: "После ста лет работы кожевником я стал гигантом в демонической секте."
boosty_url: "https://boosty.to/langllax"
---

`;
  content = frontmatter + content;
}

// Replace 'Глава X' at the start of a line with '## Глава X'
content = content.replace(/^Глава\s+(\d+)/gm, '## Глава $1');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Book formatted successfully!');
