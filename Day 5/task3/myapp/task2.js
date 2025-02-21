const process = require('process');

function checkEvenOdd(number){
    if(number %2 === 0){
        console.log(`${number} is a even`);
    }
    else{
        console.log(`${number} is a odd`);
    }
}

if (process.argv.length !== 3) {
    console.log("<number>")
}
else {
    const num = parseInt(process.argv[2], 10);
    
    if (!isNaN(num)) {
        checkEvenOdd(num);
    } else {
        console.log("Please enter a valid integer.");
    }
}
