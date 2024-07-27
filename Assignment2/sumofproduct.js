function sumOfProducts(n1, n2) {
    n1 = n1.toString().split('').reverse();
    n2 = n2.toString().split('').reverse();
    let sum = 0;
    for (let i = 0; i < Math.max(n1.length, n2.length); i++) {
        const digit1 = parseInt(n1[i] || 0, 10);
        const digit2 = parseInt(n2[i] || 0, 10);
        sum += digit1 * digit2;
    }
    return sum;
}

setTimeout(() => {
    console.log("\nSum of products of corresponding digits:");
    console.log("Sum of products for 6 and 34: " + sumOfProducts(6, 34));
    console.log("Sum of products for 123 and 456: " + sumOfProducts(123, 456));
    console.log("Sum of products for 1234 and 5678: " + sumOfProducts(1234, 5678));
}, 8000);