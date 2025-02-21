if (process.argv.length !== 3) {
    console.log("Usage: node script.js <number>");
} else {
    const num = parseInt(process.argv[2], 10);

    if (!isNaN(num)) {
        console.log(`Multiplication Table for ${num}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    } else {
        console.log("Please enter a valid number.");
    }
}
