function calculator(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return "Invalid operation";
    }
}

setTimeout(() => {
    console.log("\nCalculator results:");
    console.log("Add: " + calculator(10, 5, 'add'));
    console.log("Subtract: " + calculator(10, 5, 'subtract'));
    console.log("Multiply: " + calculator(10, 5, 'multiply'));
    console.log("Divide: " + calculator(10, 5, 'divide'));
}, 4000);