// This program uses reducer function to add numbers
// & uses concept of memoization to store an output so that output is not computed again for the same input
// rather in such case output is accessed from cache where it is stored.

function memoize(func) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();

    if (cache.has(key)) {
      return cache.get(key);
    }

    cache.set(key, func(...args));
    return cache.get(key);
  };
}

function adder(...args) {
  return args.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
}

function time(fn) {
  console.time();
  console.log(fn());
  console.timeEnd();
}

const adderM = memoize(adder);

time(() => adder(1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 12, 12));
time(() => adder(1, 4, 5));
time(() => adder(2, 5));
time(() => adder(1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 12, 12));
time(() => adder(1, 2));
time(() => adder(1, 2, 3));
time(() => adder(2, 5));
time(() => adder(1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 12, 12));
time(() => adder(1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 12, 12));
