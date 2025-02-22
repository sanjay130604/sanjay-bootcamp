const fs = require("fs");
const path = require("path");

const command = process.argv[2]; // Get command (create, delete, list)
const fileName = process.argv[3]; // Get file name if provided
const directory = "./files"; // Directory to manage files

// Ensure the directory exists
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

switch (command) {
  case "create":
    if (!fileName) {
      console.log("❌ Please provide a file name.");
      process.exit(1);
    }
    const filePath = path.join(directory, fileName);
    fs.writeFileSync(filePath, "", { flag: "w" });
    console.log(`✅ File created: ${filePath}`);
    break;

  case "delete":
    if (!fileName) {
      console.log("❌ Please provide a file name.");
      process.exit(1);
    }
    const deletePath = path.join(directory, fileName);
    if (fs.existsSync(deletePath)) {
      fs.unlinkSync(deletePath);
      console.log(`🗑️ File deleted: ${deletePath}`);
    } else {
      console.log("❌ File does not exist.");
    }
    break;

  case "list":
    const files = fs.readdirSync(directory);
    if (files.length === 0) {
      console.log("📂 No files found.");
    } else {
      console.log("📜 Files:", files.join(", "));
    }
    break;

  default:
    console.log("❌ Invalid command. Use create <filename>, delete <filename>, or list.");
}
