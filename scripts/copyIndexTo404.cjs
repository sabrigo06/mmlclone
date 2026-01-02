const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const indexFile = path.join(distDir, 'index.html');
const fallbackFile = path.join(distDir, '404.html');

try {
  if (fs.existsSync(indexFile)) {
    fs.copyFileSync(indexFile, fallbackFile);
    console.log('Copied index.html → 404.html');
  } else {
    console.log('index.html not found in dist; skipping copy.');
  }
} catch (err) {
  console.error('Failed to copy index.html to 404.html:', err);
  process.exitCode = 1;
}
