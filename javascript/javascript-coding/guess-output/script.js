// var foo = 1;
// var change = () => {
//   this.foo = 2;
//   console.log(this.foo);
// };
// var obj = {
//   foo: 3,
// };
// var bounded = change.bind(obj);

// // What would be the output of the following?
// console.log(foo); // 1
// console.log(change()); // 2
// console.log(foo); // 2
// console.log(obj.foo); // 3
// console.log(bounded()); // 2

// ------------------------------------

// function compute() {
//     const condition = true;
//     if (condition) {
//       let a = false;
//       let b = false;
//     }
//     return {
//       a: a || null,
//       b: b || null
//     }
//   }
//   var r = compute();
//   // What do you think would be the output?
//   console.log(r); // error

// Variables a and b are blocked scope. They do not exist outside the if condition. If we try to use them then it would be an error as those variables are undeclared in that scope.

// ------------------------------------

// function init() {
//     throw new Error("I am an error");
//     return Promise.resolve(1);
//   }

//   init()
//     .then((v) => console.log(v + 1))
//     .catch((err) => console.log("Error caught -- ", err));

// errors are caught by the catch block only when there are part of the promise chain. In the current code snippet, error thrown at line no. 2 is outside the promise chain as the chain is initiated at line no 3

// ------------------------------------

// function Person() {
//   this.name = "Yomesh";
//   //return this.name;
// }

// var person = new Person();
// console.log(person.name); // Output 1?

// function Car() {
//   this.name = "BMW";
//   return this.name;
// }

// var car = new Car();
// console.log(car.name); // Output 2?

// function Animal() {
//   var animals = [];
//   animals.push("tiger");
//   animals.alive = true;
//   return animals;
// }

// var animals = new Animal();
// console.log(animals.alive, Array.isArray(animals), animals[0] === "tiger");

// function Rocket() {
//   var rocket = () => {
//     console.log("I am an rocket");
//   };
//   this.engines = 4;
//   return rocket;
// }

// var rocket = new Rocket();
// rocket(); // Is there going to be an error? Output 4?
// console.log(rocket.engines); // undefined

// function Company() {
//   this.name = "OLX";
//   return {};
// }

// var company = new Company();
// console.log(company.name); // undefined

// ------------------------------------

// function compare(input) {
//   return !!(input == 1 || input == 2 || input == 3);
// }

// console.log(compare(0));
// console.log(compare(1));
// console.log(compare(2));
// console.log(compare(3));
// console.log(compare(4));
// console.log(compare([1]));
// console.log(compare([2]));
// console.log(compare([3]));

// when we use == then it implicitly type cast operands.Therefore, [1] will become "1" and then 1. Similarly, for all arrays type casting will take place.

// ------------------------------------

// var person = {};

// ({ name: person["username"] } = {
//   username: "yomeshgupta",
//   email: "team@devtools.tech",
//   name: "yomesh",
// });

// console.log(person.username, person.name);

// ------------------------------------

// var x = 1;

// for (; x < 6; x += 2) {
//   x = x * x;
// }

// console.log(x);

/*
First iteration [x = 1] :

Step 1 -- 1 < 6 -- true
Step 2 -- x = 1 * 1 -- 1
Step 3 -- x += 2 -- 1 += 2 -- 3

Second iteration [x = 3]:

Step 1 -- 3 < 6 -- true
Step 2 -- x = 3 * 3 -- 9
Step 3 -- x += 2 -- 9 += 2 -- 11

Third iteration [x = 11]:

Step 1 -- 11 < 6 -- false

So, loop breaks now and 11 will be the final value of x
*/

// ------------------------------------

// const first = 6;
// const second = "6";
// const third = first + second;
// const fourth = first - second;
// const fifth = third + first * first;
// const sixth = fourth + second * second;

// console.log("Fifth is --", fifth, typeof fifth);
// console.log("Sixth is --", sixth, typeof sixth);

/*
Fifth is -- 6636 string
Sixth is -- 36 number
*/

// ------------------------------------

// function reverse(string) {
//   let i;
//   let temp;
//   const limit = parseInt(string.length / 2, 10);

//   for (i = 0; i < limit; i++) {
//     temp = string[i];
//     string[i] = string[string.length - i - 1];
//     string[string.length - i - 1] = temp;
//   }

//   return string;
// }

// const reversed = reverse("hello");
// console.log(reversed);

/*
Strings are immutable in JavaScript. Hence, even if we try to overwrite it but original value will never be lost. In order to reverse using this method, we need to convert string into an array first.

let i;
let temp;
const string = str.split("");
*/

// ------------------------------------
