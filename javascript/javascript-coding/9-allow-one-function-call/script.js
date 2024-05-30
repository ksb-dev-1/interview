/*
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
*/

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
      return result;
    } else {
      return undefined;
    }
  };
}

// Example usage:
const fn = (a, b, c) => a + b + c;

const onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));

// console.log(onceFn(5, 7, 4));
// console.log(onceFn(2, 3, 6));
// console.log(onceFn(4, 6, 8));
