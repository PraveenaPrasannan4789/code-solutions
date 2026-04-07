//write a closure function

function closureExample() {
  let count = 0;
  return function add() {
    count++;
    console.log(count);
    return count;
  };
}

const val = closureExample();
console.log("returned value", val());

//flattened array problem
const arr = [1, [2, 3], [4, [5]]];
const flattened = arr.flat(2); // depth = 2 //if unknown give infinity
console.log(flattened); // [1, 2, 3, 4, 5]

const flattenedArray = (arr) => {
  let newArra = [];
  for (let x of arr) {
    if (Array.isArray(x)) {
      newArra = newArra.concat(flattenedArray(x));
      const y = [1, 3, 4, 5].concat([8, 9, 0]);
      console.log(y);
    } else {
      newArra.push(x);
    }
  }
  return newArra;
};

console.log(flattenedArray([1, [2, 3, 4], 5]));
