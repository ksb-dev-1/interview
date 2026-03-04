function flat(array, depth = 1) {
  function flatten(currentArray, currentDepth) {
    if (currentDepth === depth) {
      return currentArray.slice();
    }

    let result = [];

    for (const item of currentArray) {
      if (Array.isArray(item)) {
        const flattened = flatten(item, currentDepth + 1);
        result.push(...flattened);
      } else {
        result.push(item);
      }
    }
    return result;
  }
  return flatten(array, 0);
}

const array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const depth = 2;

console.log(flat(array, depth));

// function flat(array, depth = 1) {
//   if (depth < 1) {
//     return array.slice();
//   }

//   const result = [];

//   for (const val of array) {
//     if (Array.isArray(val)) {
//       result.push.apply(result, flat(val, depth - 1));
//     } else {
//       result.push(val);
//     }
//   }
//   return result;
// }
