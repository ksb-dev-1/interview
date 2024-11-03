function pipe(funcs) {
  return function (x) {
    let result = x;

    for (let i = 0; i < funcs.length; i++) {
      result = funcs[i].call(this, result);
    }

    return result;
  };
}

const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

const result = pipe([times(2), times(3)]); // x * 2 * 3
// const result = pipe([times(2), plus(3), times(4)]); // (x * 2 + 3) * 4
// const result = pipe([times(2), subtract(3), divide(4)]); // (x * 2 - 3) / 4

console.log(result(2));

// -------------------------------------------------------------------

//   return function (arg) {
//     return funcs.reduce((result, func) => func.call(this, result), arg);
//   };
