function fibonacci(n) {
  if (!Number.isInteger(n) || n <= 0) {
    return "Invalid input. Enter a number greater than 0.";
  }

  const fibArr = [0, 1];

  while (fibArr.length <= n) {
    fibArr.push(fibArr.at(-1) + fibArr.at(-2));
  }

  return `${fibArr[n - 1]} is found at index ${n}`;
}


const fib = (n) => !Number.isInteger(n) || n <= 1 ? n : fib(n - 1) + fib(n - 2);


function fibonacciSearch(arr, x) {
  const n = arr.length;

  let fibMMinus2 = 0;
  let fibMMinus1 = 1;
  let fibM = fibMMinus1 + fibMMinus2;

  while (fibM < n) {
    fibMMinus2 = fibMMinus1;
    fibMMinus1 = fibM;
    fibM = fibMMinus1 + fibMMinus2;
  }

  let offset = -1;

  while (fibM > 1) {
    const i = Math.min(offset + fibMMinus2, n - 1);

    if (arr[i] < x) {
      fibM = fibMMinus1;
      fibMMinus1 = fibMMinus2;
      fibMMinus2 = fibM - fibMMinus1;
      offset = i;
    } else if (arr[i] > x) {
      fibM = fibMMinus2;
      fibMMinus1 = fibMMinus1 - fibMMinus2;
      fibMMinus2 = fibM - fibMMinus1;
    } else {
      return `${x} is found at index ${i}`;
    }
  }

  if (fibMMinus1 === 1 && arr[offset + 1] === x) {
    return `${x} is found at index ${offset + 1}`;
  }

  return "Element not found";
}