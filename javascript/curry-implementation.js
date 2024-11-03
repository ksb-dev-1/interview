// Implementation-1

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Uses fn.apply(this, args) and curried.apply(this, args.concat(nextArgs)) to ensure that the this context is preserved.
// This is important if fn depends on the this context.

// ---------------------------------------

// Implementation-2

// function curry(fn) {
//   return function curriedFunc(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return function (...next) {
//         return curriedFunc(...args, ...next);
//       };
//     }
//   };
// }

// Does not explicitly handle the this context. If fn relies on this, the context will be lost, potentially causing issues.

// ---------------------------------------

// Implementation-3

// function curry(fn) {
//   return (curried = (...args) => {
//     if (fn.length !== args.length) {
//       return curried.bind(null, ...args);
//     }
//     return fn(...args);
//   });
// }

// Example usage
const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'
console.log(curriedJoin(1)(2)(3)); // '1_2_3'
console.log(curriedJoin(1, 2, 3, 4)); // '1_2_3'
