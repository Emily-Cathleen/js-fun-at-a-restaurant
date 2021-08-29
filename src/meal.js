function nameMenuItem(itemName) {
  return `Delicious ${itemName}`
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem
}




function formatPrice(initialPrice) {
  return `$${initialPrice}`;
};


function decreasePrice(initialPrice) {
  return (initialPrice * 0.1) - initialPrice;
};

//function decreasePrice() {
// var newPrice = initialPrice * .10;
// return initialPrice - newPrice;
}

//function createRecipe(menuItemType) {
//  return `Delicious ${menuItemType}`;
//};

function createRecipe(title, ingredient, menueItem) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
  return recipe
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
