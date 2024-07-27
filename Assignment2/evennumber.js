function displayEvenNumbers() {
    console.log("Even numbers from 1 to 100:");
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

setTimeout(displayEvenNumbers, 2000);

