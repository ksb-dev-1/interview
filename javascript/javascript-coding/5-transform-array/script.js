var map = function (arr, fn) {
  //   if (!Array.isArray(arr) || typeof fn !== "function") {
  //     throw new Error("Invalid input");
  //   }

  //   const newArray = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     const newValue = fn(arr[i], i);
  //     newArray.push(newValue);
  //   }

  //   return newArray;

  const res = new Array(arr.length);

  for (const i in arr) {
    res[i] = fn(arr[i], Number(i));
  }
  return res;
};

//const arr = [1, 2, 3];
// const fn = function plusone(n) {
//   return n + 1;
// };
// const fn = function plusI(n, i) {
//   return n + i;
// };
const arr = [10, 20, 30];
const fn = function constant() {
  return 42;
};

const newArray = map(arr, fn);
console.log(newArray);
