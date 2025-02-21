if (process.argv.length !== 3) {
    console.log("Usage: node script.js <your_string>");
} else {
    const inputString = process.argv[2];
    const reversedString = inputString.split("").reverse().join("");
    console.log(`${reversedString}`);
}
