
function makeSandwich(...ingredients: string[]) {
    console.log(`Your sandwitch contains ${ingredients.join(", ")}.`);
}

makeSandwich("bread", "chicken", "olives");
makeSandwich("mayonnaise", "vegitables", "olives");
makeSandwich("mayonnaise", "cheddar cheese", "tomato", "roast beef");

