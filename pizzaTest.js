let pizzaOrders = [];
let fakeInputs = ["cheese", "pepperoni", "veggie", "meatlovers", "hawaiian"];

for (let i = 0; i < 5; i++) {
    let order = fakeInputs[i]; // pretend like a user typed it
    pizzaOrders.push(order);
}

console.log("Here are all the pizza orders:");
for (let i = 0; i < pizzaOrders.length; i++) {
    console.log("- " + pizzaOrders[i]);
}

console.log("Total pizzas ordered: " + pizzaOrders.length);
