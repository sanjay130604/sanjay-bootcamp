// Get command-line arguments
const args = process.argv.slice(2);

// Check if two numbers are provided
if (args.length !== 2) {
    console.error("Please provide exactly two numbers.");
    process.exit(1);
}

// Parse numbers
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

// Validate numbers
if (isNaN(num1) || isNaN(num2)) {
    console.error("Both arguments must be valid numbers.");
    process.exit(1);
}

// Calculate sum
const sum = num1 + num2;

// Print result
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
