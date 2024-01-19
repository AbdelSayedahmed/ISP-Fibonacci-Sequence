/**
In this this function, a single parameter {number} n is accepted where n represents the nth position in the fibonacci sequence.
The value of the nth position is passed at the end
*/

function fibonacci(n) {
    if (n <= 0) { // Conditional to check if param {number} n is greater than 0.
        return "Invalid input. Enter a number greater than 0."; // return {string} when condition is met.
    }

    const fibArr = [0, 1]; // Creating an array with the starting numbers in the fibonacci sequence.

    while (fibArr.length <= n) { // While loop that that will break when the length of fibArr is n (ie the nth number was found).
        fibArr.push(fibArr.at(-1) + fibArr.at(-2)); // We push the sum of the two preceding numbers into the array.
    }

    return fibArr[n - 1]; // return the nth number of the fibonacci sequence
}

console.log(fibonacci(3)); // 1
console.log(fibonacci(8)); // 13
console.log(fibonacci(12)); // 89