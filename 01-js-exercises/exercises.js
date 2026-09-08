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

//count occurences
//["a","b","a","c","b","a"]
const countOccurences = (arr) => {
  let countObj = {};
  for (let i of arr) {
    countObj[i] = (countObj[i] || 0) + 1;
  }
  return countObj;
};
console.log("countOccurences", countOccurences(["a", "b", "a", "c", "b", "a"]));

//Array processing

const array1 = [
  {
    name: "Joana",
    age: 22,
    active: true,
  },
  {
    name: "Adil",
    age: 28,
    active: false,
  },
  {
    name: "Rakesh",
    age: 12,
    active: true,
  },
];

//get active staff
const activeStaff = array1.filter((x) => {
  return x.active === true;
});
console.log("activeStaff", activeStaff);

//get their names
const staffNames = array1.map((x) => x.name);
console.log("staffnames", staffNames);

// 3. Find the staff member aged 12
const staffAged12 = array1.filter((x) => x.age === 12);
console.log("staffnames", staffAged12);

// 4. Calculate the average age

const totalAge = array1.reduce((acc, val) => {
  return (acc = acc + val.age);
}, 0);
console.log("totalAge", totalAge);
const avgAge = totalAge / array1.length;
console.log("Average age", Math.round(avgAge));

// 5. Check if everyone is over 20
const isEveryOneOver20 = array1.every((x) => x.age > 20);
console.log("isEveryOneOver20", isEveryOneOver20);

//Objects & Destructuring
const worker = {
  name: "John",
  age: 32,
  role: "Manager",
  active: true,
};

// Exercises:
// 1. Destructure name and role

const { name, role } = worker;

console.log(name); // John
console.log(role); // Manager
