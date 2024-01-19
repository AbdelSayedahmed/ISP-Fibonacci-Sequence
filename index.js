/*
In this this function, a single parameter {number} n is accepted where n represents the nth position of a value in the fibonacci sequence.
The value of the nth position is returned at the very end assuming the sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
*/

function fibonacci(n) {
    if (!Number.isInteger(n) || n <= 0) {
      // Conditional to check if param {number} n is greater than 0 or if its even a number.
      return "Invalid input. Enter a number greater than 0."; // return {string} when condition is met.
    }
  
    const fibArr = [0, 1]; // Creating an array with the starting numbers in the fibonacci sequence.
  
    while (fibArr.length <= n) {
      // While loop that that will break when the length of fibArr is n (ie the nth number was found).
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
  
  /*
  This function takes a sorted array (arr) and an element to search for (x) {number}. It returns the index of the element if 
  found, or 'Element not found' if not found. The algorithm uses Fibonacci numbers to divide the array and perform the search efficiently.
  */
  
  function fibonacciSearch(arr, x) {
    const n = arr.length; // Initialize n and set it to be the length of arr
  
    // Lines 44, 45, and 46 initializes three variables representing Fibonacci sequence terms.
    let fibMMinus2 = 0;
    let fibMMinus1 = 1;
    let fibM = fibMMinus1 + fibMMinus2;
  
    while (fibM < n) {
      // Loops to find the smallest Fibonacci number greater than or equal to n.
      fibMMinus2 = fibMMinus1; //  Updates fibMMinus2 to the previous value of fibMMinus1.
      fibMMinus1 = fibM; // Updates fibMMinus1 to the previous value of fibM.
      fibM = fibMMinus1 + fibMMinus2; // Calculates the next Fibonacci number.
    }
  
    let offset = -1; // initializes the offset to -1.
  
    while (fibM > 1) {
      // Loops based on Fibonacci numbers.
      const i = Math.min(offset + fibMMinus2, n - 1); // Calculates the index i to compare with the target value x.
  
      if (arr[i] < x) {
        // Updates variables for Fibonacci sequence if the current element is less than the target value.
        fibM = fibMMinus1;
        fibMMinus1 = fibMMinus2;
        fibMMinus2 = fibM - fibMMinus1;
        offset = i;
      } else if (arr[i] > x) {
        // Updates variables for Fibonacci sequence if the current element is greater than the target value.
        fibM = fibMMinus2;
        fibMMinus1 = fibMMinus1 - fibMMinus2;
        fibMMinus2 = fibM - fibMMinus1;
      } else {
        return `${x} is found at index ${i}`; // Returns the index if the target element is found.
      }
    }
  
    if (fibMMinus1 === 1 && arr[offset + 1] === x) {
      // Checks a special case when the last Fibonacci number is 1 and the next element after the offset is the target element.
      return `${x} is found at index ${offset + 1}`;
    }
  
    return "Element not found"; // Returns 'Element not found' if the target element is not found.
  }
  
  const sortedArray1 = [1, 3, 5, 7, 9, 11, 13, 15];
  const sortedArray2 = [0.5, 2.1, 4.8, 6.3, 8.7, 10.2, 12.6, 14.9];
  const sortedArray3 = [-15, -12, -9, -6, -3, 0, 3, 6];
  
  console.log(fibonacciSearch(sortedArray1, 15)); // 15 is found at index 7
  console.log(fibonacciSearch(sortedArray1, 98)); // Element not found
  
  console.log(fibonacciSearch(sortedArray2, 4.8)); // 4.8 is found at index 2
  console.log(fibonacciSearch(sortedArray2, 48)); // Element not found
  
  console.log(fibonacciSearch(sortedArray3, -15)); // -15 is found at index 0
  console.log(fibonacciSearch(sortedArray3, -17)); // Element not found  