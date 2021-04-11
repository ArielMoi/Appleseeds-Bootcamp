const fs = require('fs');

fs.writeFileSync('notes.txt', 'this is a node created text fils');

fs.copyFileSync("notes.txt", "copy.txt");