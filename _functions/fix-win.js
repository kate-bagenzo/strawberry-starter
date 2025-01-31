import fs from 'fs';
console.log('Applying a patch for the Windows Dev Server...');
const targetFile = 'node_modules/@11ty/eleventy/src/EleventyFiles.js';
const newFile = fs.readFileSync("_functions/EleventyFiles.js", 'utf-8');
fs.writeFileSync(targetFile, newFile);
