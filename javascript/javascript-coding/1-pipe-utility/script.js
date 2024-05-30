/*
In this question, the candidate needs to implement a utility called pipe that takes n functions as input and returns a function that can be invoked to compute the final result by invoking each input function and providing the previous functions' output as an argument.
*/

function pipe(...fns) {
  // write your code below
  return function (x) {
    return fns.reduce((v, f) => f(v), x);
  };
}

// const pipe = (...fns) => x => {
//   // write your code below
//   return fns.reduce((v, f) => f(v), x);
// };

const getName = (object) => object.name;
const makeUpperCase = (string) => string.toUpperCase();
const slice = (string) => string.slice(0, 3);

const method = pipe(getName, makeUpperCase, slice);

const value = method({ name: "devtools" });

console.log(value);
