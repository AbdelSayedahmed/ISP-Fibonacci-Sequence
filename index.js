/*
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

    return `${fibArr[n - 1]} is found at position ${n} in the Fibonacci Sequence`; // return the nth number of the fibonacci sequence
}

console.log(fibonacci(3)); // 1 is found at position 3 in the Fibonacci Sequence
console.log(fibonacci(8)); // 13 is found at position 8 in the Fibonacci Sequence
console.log(fibonacci(12)); // 89 is found at position 12 in the Fibonacci Sequence

/*
This one liner is similar to the function but instead assumes the sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
In this one-liner we return n if the number is less than or equal to 1. If the number is greater than 1, the function recursively
calls itself with fib(n - 1) and fib(n - 2) and sums the results. This recursion continues until it reaches the base case.
*/
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

console.log(fib(5)); // 5
console.log(fib(12)); // 144
console.log(fib(11)); // 89
console.log(fib(10)); // 55