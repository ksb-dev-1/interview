// A client contacts the freelancer to enquire about their rates.
// The freelancer explains that they work 8 hours a day.However, the freelancer
// knows only their hourly rates for the project.Help them estimate a day rate
// given an hourly rate.

export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}
console.log(dayRate(89));
// => 712

// --------------------------------------------

// Another day, a project manager offers the freelancer to work on a project
// with a fixed budget.Given the fixed budget and the freelancer's hourly rate, help
// them calculate the number of days they would work until the budget is exhausted.
// The result must be rounded down to the nearest whole number.

export function daysInBudget(budget, ratePerHour) {
  const totalHours = budget / ratePerHour;
  const totalDays = Math.floor(totalHours / 8);
  return totalDays;
}

console.log(daysInBudget(20000, 89));
// => 28

// ---------------------------------------------

// Often, the freelancer's clients hire them for projects spanning over multiple months.
// In these cases, the freelancer decides to offer a discount for every full month,
// and the remaining days are billed at day rate.Every month has 22 billable days.
// Help them estimate their cost for such projects, given an hourly rate, the number
// of days the project spans, and a monthly discount rate.The discount is always
// passed as a number, where 42 % becomes 0.42.The result must be rounded up to the
// nearest whole number.

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const numberOfMonths = Math.floor(numDays / 22);
  const costPerMonth = 22 * dayRate(ratePerHour);
  const discountPerMonth = costPerMonth - costPerMonth * discount;
  const totalDiscount = discountPerMonth * numberOfMonths;
  const remainingDays = numDays % 22;
  const costOfRemainingDays = remainingDays * 8 * ratePerHour;
  const totalCost = totalDiscount + costOfRemainingDays;

  return Math.ceil(totalCost);
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));
// => 97972
