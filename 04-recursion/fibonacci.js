function fibonacci(num){
    if(num === 0)return [];
    if(num===1) return [0];

    let fib = [0,1];
    for(let i=2;i<num;i++){
        fib[i]= fib[i-1]+fib[i-2];
    }
return fib;
}

console.log('fibonacci', fibonacci(6))

// Approach used:
// Iterative calculation of Fibonacci numbers by storing previous two values in an array.
// Why:
// Builds the sequence in a single pass efficiently and avoids repeated recursive calls.
// Time complexity:
// O(n) → n is the number of Fibonacci numbers requested → loop runs n-2 times.
// Space complexity:
// O(n) → stores all Fibonacci numbers in an array of size num.
// (Can be reduced to O(1) if only the last number is needed.)
// Pattern used:
// Dynamic programming / Bottom-up iterative approach.
// Memory trick:
// Store previous two numbers and build the next → no recursion stack overhead.
// Loop type:
// Single loop → O(n) → simple linear traversal.