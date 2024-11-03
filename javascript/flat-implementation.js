// Implementation-1

function flat(arr, depth = 1) {
  if (depth < 1) {
    return arr.slice();
  }

  const result = [];

  for (const val of arr) {
    if (Array.isArray(val)) {
      //result.push(...flat(val, depth - 1));
      result.push.apply(result, flat(val, depth - 1));
    } else {
      result.push(val);
    }
  }

  return result;
}

// ---------------------------------------

// Implementation-2

// function flat(arr, depth = 1) {
//   if (depth < 1) {
//     return arr.slice();
//   }

//   return arr.reduce((acc, val) => {
//     if (Array.isArray(val)) {
//       acc.push(...flat(val, depth - 1));
//     } else {
//       acc.push(val);
//     }
//     return acc;
//   }, []);
// }

// Example usage
const nestedArray = [1, [2, [3, [4, 5]]], 6];

console.log(flat(nestedArray)); // [1, 2, [3, [4, 5]], 6]
console.log(flat(nestedArray, 1)); // [1, 2, [3, [4, 5]], 6]
console.log(flat(nestedArray, 2)); // [1, 2, 3, [4, 5], 6]
console.log(flat(nestedArray, 3)); // [1, 2, 3, 4, 5, 6]
console.log(flat(nestedArray, Infinity)); // [1, 2, 3, 4, 5, 6]
