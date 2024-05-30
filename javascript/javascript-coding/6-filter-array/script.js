var filter = function (arr, fn) {
  if (!Array.isArray(arr) || typeof fn !== "function") {
    throw new Error("Invalid input");
  }

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
};

// const arr = [0, 10, 20, 30];
// const fn = function greaterThan10(n) {
//   return n > 10;
// };

// const arr = [1, 2, 3];
// const fn = function firstIndex(n, i) {
//   return i === 0;
// };

const arr = [-2, -1, 0, 1, 2];
const fn = function plusOne(n) {
  return n + 1;
};

const newArray = filter(arr, fn);
console.log(newArray);
