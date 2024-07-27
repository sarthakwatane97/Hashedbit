function findTax(salary) {
    switch (true) {
        case salary > 0 && salary <= 500000:
            return 0;
        case salary > 500000 && salary <= 1000000:
            return salary * 0.10;
        case salary > 1000000 && salary <= 1500000:
            return salary * 0.20;
        case salary > 1500000:
            return salary * 0.30;
        default:
            return "Invalid salary";
    }
}

setTimeout(() => {
    console.log("\nTax calculations:");
    console.log("Tax for 400000: " + findTax(400000));
    console.log("Tax for 750000: " + findTax(750000));
    console.log("Tax for 1250000: " + findTax(1250000));
    console.log("Tax for 2000000: " + findTax(2000000));
}, 6000);