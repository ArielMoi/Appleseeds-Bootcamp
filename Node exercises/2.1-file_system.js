const fs = require('fs');

fs.writeFileSync('notes.txt', 'this is a node created text fils'); // creates text file

fs.copyFileSync("notes.txt", "copy.txt"); // creates copy of txt file


fs.appendFileSync('notes.txt', 'this was appended to the file')

fs.rename("copy.txt", 'copyRenamed.txt', () => console.log('e')); // rename file

function getCurrentFilenames() {
  /// readdirSync -- returns array with files names
  console.log("Current filenames:");
  fs.readdirSync(__dirname).forEach((file) => {
    console.log(file);
  });
}
getCurrentFilenames();

// read files - 
console.log(fs.readFileSync("notes.txt", { encoding: "utf8", flag: "r" }));  