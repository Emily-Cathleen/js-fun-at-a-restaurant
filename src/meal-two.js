function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {

  return {
    name: name,
    price: price,
    type: type
  }
}


function addIngredients(ingredient, ingredients) {

  return ingredients.push(ingredient);
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
