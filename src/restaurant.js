function createRestaurant (restaurantName) {
  var newRestaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return newRestaurant;
}

function addMenuItem(aRestaurant, newItem) {
  var restaurantMenu = aRestaurant.menus;

  if (newItem.type === "breakfast") {
    if (restaurantMenu.breakfast.indexOf(newItem) === -1) {
      restaurantMenu.breakfast.push(newItem)
    }
  }


  // if (newItem.type === "lunch") {
  //   restaurantMenu.lunch.push(newItem)
  //   restaurantMenu.lunch.indexOf()
  // }
  // if (newItem.type === "dinner") {
  //   restaurantMenu.dinner.push(newItem)
  //   restaurantMenu.dinner.indexOf()
  // }
};









function removeMenuItem(newRestaurant,removeItem, removeType ) {

}

function removeMenuItem(restaurantName, targetItem, removedItemMenu){
  var itemToRemove = targetItem;
  for (var i = 0; i < restaurantName.menus.breakfast.length; i++){
    if (restaurantName.menus.breakfast[i].name === itemToRemove) {
      restaurantName.menus.breakfast.splice(i, 1);
    }
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
