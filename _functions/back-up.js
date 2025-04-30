import fs from 'fs';
import path from 'path';

if (!(fs.existsSync(path.normalize('_backup/')))) {
    fs.mkdirSync(path.normalize('_backup/'));
    fs.mkdirSync(path.normalize('_backup/src/'));
    fs.mkdirSync(path.normalize('_backup/src/_data'));
}

fs.existsSync(path.normalize('src/index.md')) && fs.copyFileSync(path.normalize('src/index.md'), path.normalize('_backup/src/index.md'));
fs.existsSync(path.normalize('src/favicon.ico')) && fs.copyFileSync(path.normalize('src/favicon.ico'), path.normalize('_backup/src/favicon.ico'));
fs.existsSync(path.normalize('src/social.png')) && fs.copyFileSync(path.normalize('src/social.png'), path.normalize('_backup/src/social.png'));
fs.existsSync(path.normalize('src/_data/config.jsonc')) && fs.copyFileSync(path.normalize('src/_data/config.jsonc'), path.normalize('_backup/src/_data/config.jsonc'));

fs.existsSync(path.normalize('src/_includes/navbar.html')) && fs.copyFileSync(path.normalize('src/_includes/navbar.html'), path.normalize('_backup/src/_includes/navbar.html'));
fs.existsSync(path.normalize('src/_includes/comments.html')) && fs.copyFileSync(path.normalize('src/_includes/comments.html'), path.normalize('_backup/src/_includes/comments.html'));

fs.existsSync(path.normalize('src/posts/')) && fs.cpSync(path.normalize('src/posts/'), path.normalize('_backup/src/posts/'), {recursive: true});
fs.existsSync(path.normalize('src/info/')) && fs.cpSync(path.normalize('src/info/'), path.normalize('_backup/src/info/'), {recursive: true});
fs.existsSync(path.normalize('src/assets/')) && fs.cpSync(path.normalize('src/assets/'), path.normalize('_backup/src/assets/'), {recursive: true});
fs.existsSync(path.normalize('src/minifeeds/')) && fs.cpSync(path.normalize('src/minifeeds/'), path.normalize('_backup/src/minifeeds/'), {recursive: true});

console.log(' 🍓🗃️  Site backed up successfully.');