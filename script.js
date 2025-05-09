let pizzaOrders = ["cheese", "pepperoni", "veggie", "sausage"];

// loop runs 5 times from 0 to 5 i++ means up
for (let i = 0; i < 5; i++) {
    // user order prompt
    let order = prompt("Enter pizza order #" + (i + 1) + ":");
    // adds it to the array
    pizzaOrders.push(order);
}


console.log("Here are all the pizza orders:");
// loop through the array
for (let i = 0; i <pizzaOrders.length; i++) {
    // print the orders
    console.log(pizzaOrders[i]);
}

console.log("Total pizzas ordered: " + pizzaOrders.length);


