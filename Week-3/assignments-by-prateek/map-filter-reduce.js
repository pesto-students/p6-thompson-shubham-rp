// This program explains basics of map, filter & reduce methods in js
// We take the following array & implement the methods to each array to demonstrate what they do.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// map() is used to apply an operation to all the elements of an array

const squared_array = arr.map((item) => item * item); // a new squared_array will be made up of squares of each number in arr

// filter() as the name suggests, filters elements from an array based on condition(filter) provided

const even_numbered_array = arr.filter((item) => item % 2 == 0); //

const odd_numbered_array = arr.filter((item) => item % 2 != 0);

// reduce() method applies an operation on an array to give a single output value(reduces array to a single output)

const array_adder = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

const array_multiplier = arr.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);

console.log(arr);
console.log(squared_array);
console.log(even_numbered_array);
console.log(odd_numbered_array);
console.log(array_adder);
console.log(array_multiplier);
