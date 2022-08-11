const fs = require('fs');
const path = require('path');

const taskFolderPath = path.resolve(__dirname, '../task');
const srcFolderPath = path.resolve(__dirname, '../src');
const srcFiles = fs.readdirSync(srcFolderPath);

srcFiles.forEach(srcFile => {
    fs.writeFileSync(path.join(taskFolderPath, srcFile), '');
})
