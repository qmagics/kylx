const fs = require('fs');
const path = require('path');

const folderPath = path.resolve(__dirname, '../task');

const files = fs.readdirSync(folderPath);

files.forEach(file => {
    fs.writeFileSync(path.join(folderPath, file), '');
});
