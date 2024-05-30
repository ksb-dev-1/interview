var compose = function (functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};

const functionsArray = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const composedFunction = compose(functionsArray);
const x = 4;

// const functionsArray = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
// const composedFunction = compose(functionsArray);
// const x = 1;

// const functionsArray = [];
// const composedFunction = compose(functionsArray);
// const x = 42;

const result = composedFunction(x);
console.log(result);
