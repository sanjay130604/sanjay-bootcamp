const fs = require("fs");
// check the file

if (process.argv.length !== 3) {
    console.log("Usage: node script.js <file_path>");
} else {
    const filePath = process.argv[2];
    // file enter

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);

        console.log(`File: ${filePath}`);
        console.log(`Size: ${stats.size} bytes`);
        console.log(`Created: ${stats.birthtime}`);
        console.log(`Last Modified: ${stats.mtime}`);
    } else {
        console.log("Error: File does not exist.");
    }
}
