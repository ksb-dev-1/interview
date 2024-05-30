var reduce = function (arr, fn, init) {
  if (!Array.isArray(arr) || typeof fn !== "function") {
    throw new Error("Invalid input");
  }

  let res = init;

  for (let i = 0; i < arr.length; i++) {
    res = fn(res, arr[i]);
  }

  return res;
};

const arr = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr;
};
const init = 0;

const res = reduce(arr, fn, init);

console.log(res);
