function sum(num, currentSum = 0) {
  const newSum = num + currentSum;

  const func = function (args) {
    return sum(args, num + currentSum);
  };

  func.valueOf = function () {
    return newSum;
  };

  return func;
}

const sum1 = sum(1);

console.log(sum1(2) == 3); // true
console.log(sum1(3) == 4); // true
console.log(sum(1)(2)(3) == 6); // true
console.log(sum(5)(-1)(2) == 6); // true

// -----------------------------------------------------

//sum1(2) // here valueOf will not be called
//sum1(2) == 3; // here valueOf will be called

// func.toString = function () {
//   return newSum.toString();
// };

// function sum(num, currentSum = 0) {
//   const newSum = num + currentSum;

//   console.log(1);

//   const func = function (args) {
//     console.log(2);
//     return sum(args, num + currentSum);
//   };

//   console.log(3);

//   func.valueOf = function () {
//     console.log(4);
//     return newSum;
//   };

//   console.log(5);
//   console.log("----------------");

//   return func;
// }

// output for : console.log(sum1(2) == 3)

// 1
// 3
// 5
// ----
// 2
// 1
// 3
// 5
// ----
// 4
// true
