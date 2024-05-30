function pizzaPrice(pizza, ...extras) {
  let price = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
    ExtraSauce: 1,
    ExtraToppings: 2,
  };
  if (extras.length === 0) {
    return price[pizza];
  }
  return price[pizza] + pizzaPrice(...extras);
}

// console.log(pizzaPrice("Margherita"));
// // => 7

// console.log(pizzaPrice("Caprese", "ExtraSauce", "ExtraToppings"));
// // => 12

// console.log(
//   pizzaPrice(
//     "Caprese",
//     "ExtraToppings",
//     "ExtraToppings",
//     "ExtraToppings",
//     "ExtraToppings"
//   )
// );
// => 17

// -------------------------------------------

class PizzaOrder {
  constructor(name, ...extras) {
    this.name = name;
    this.extras = extras;
  }
  print() {
    console.log(this.extras);
  }
}

const margherita = new PizzaOrder("Margherita");
const caprese = new PizzaOrder("Caprese", "ExtraToppings");

function orderPrice(pizzaOrders) {
  let total = 0;
  for (const order of pizzaOrders) {
    total += pizzaPrice(order.name, ...order.extras);
  }
  return total;
}

console.log(orderPrice([margherita, caprese]));
// => 18
