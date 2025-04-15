import fs from 'fs';

if (!(fs.existsSync('_backup/'))) {
    fs.mkdirSync('_backup/');
    fs.mkdirSync('_backup/src/');
    fs.mkdirSync('_backup/src/_data');
}

fs.existsSync('src/index.md') && fs.copyFileSync('src/index.md', '_backup/src/index.md');
fs.existsSync('src/favicon.ico') && fs.copyFileSync('src/favicon.ico', '_backup/src/favicon.ico');
fs.existsSync('src/social.png') && fs.copyFileSync('src/social.png', '_backup/src/social.png');
fs.existsSync('src/_data/config.jsonc') && fs.copyFileSync('src/_data/config.jsonc', '_backup/src/_data/config.jsonc');

fs.existsSync('src/posts/') && fs.cpSync('src/posts/', '_backup/src/posts/', {recursive: true});
fs.existsSync('src/info/') && fs.cpSync('src/info/', '_backup/src/info/', {recursive: true});
fs.existsSync('src/assets/') && fs.cpSync('src/assets/', '_backup/src/assets/', {recursive: true});

console.log(' 🍓🗃️  Site backed up successfully.');