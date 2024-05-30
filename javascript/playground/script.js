// function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
//   const oneMonth = 22;
//   const dailyWorkableHours = 8;
//   const numberOfMonths = Math.floor(numDays / oneMonth);
//   const costPerMonth = ratePerHour * oneMonth * dailyWorkableHours;
//   const discountPerMonth = costPerMonth - costPerMonth * discount;
//   const totalDiscount = discountPerMonth * numberOfMonths;
//   const remainingDays = numDays % oneMonth;
//   const costOfRemainingDays = remainingDays * dailyWorkableHours * ratePerHour;
//   const totalCost = totalDiscount + costOfRemainingDays;

//   return Math.ceil(totalCost);
// }

// const result = priceWithMonthlyDiscount(16, 70, 0); // 8960;
// //const result = priceWithMonthlyDiscount(16, 130, 0.15); // 14528;
// //const result = priceWithMonthlyDiscount(89, 230, 0.42); // 97972
// //const result = priceWithMonthlyDiscount(29.654321, 220, 0.112); // 46347
// //const result = priceWithMonthlyDiscount(29.654321, 155, 0.2547); // 27467
// console.log(result);

// -------------------------------------------

// function birdsInWeek(birdsPerDay, week) {
//   let sum = 0;
//   let index = week * 7 - 7;
//   console.log(index);
//   for (let i = index; i < index + 7; i++) {
//     sum += birdsPerDay[i];
//   }
//   return sum;
// }
// const arr = [4, 7, 3, 2, 1, 1, 2, 0, 2, 3, 2, 7, 1, 3, 0, 6, 5, 3, 7, 2, 3];
// const week = 2;
// console.log(birdsInWeek(arr, week));

// -------------------------------------------

// function remainingOrders(timeLeft, orders) {
//   let index = 0;

//   while (timeLeft > 0) {
//     switch (orders[index]) {
//       case "Pure Strawberry Joy":
//         timeLeft -= 0.5;
//         break;
//       case "Energizer":
//         timeLeft -= 1.5;
//         break;
//       case "Green Garden":
//         timeLeft -= 1.5;
//         break;
//       case "Tropical Island":
//         timeLeft -= 3;
//         break;
//       case "All or Nothing":
//         timeLeft -= 5;
//         break;
//       default:
//         timeLeft -= 2.5;
//     }
//     index++;
//   }

//   let newOrder = [];
//   let count = 0;

//   for (let i = index; i < orders.length; i++) {
//     newOrder[count++] = orders[i];
//   }
//   return newOrder;
// }

// const orders = [
//   "Tropical Island",
//   "Energizer",
//   "Limetime",
//   "All or Nothing",
//   "Pure Strawberry Joy",
// ];

// console.log(remainingOrders(7, orders));

// -----------------------------------------

// function twoSum(array1, array2) {
//   let num1 = "";
//   let num2 = "";
//   let res = 0;

//   for (let i = 0; i < array1.length; i++) {
//     num1 += array1[i];
//   }

//   for (let i = 0; i < array2.length; i++) {
//     num2 += array2[i];
//   }

//   console.log(Number(num1), Number(num2));

//   res = Number(num1) + Number(num2);
//   return res;
// }

// const leftInput = [2, 4];
// const rightInput = [1, 5, 7];

// console.log(twoSum(leftInput, rightInput));

// -----------------------------------------

function palindrome(num) {
  let s = "" + num;
  let start = 0;
  let mid = num.length / 2;
  let end = num.length - 1;

}

const num = 15651;
console.log(palindrome(num));