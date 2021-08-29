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

function addMenuItem(restaurantName, newItem) {
//   var restaurantMenu = restaurantName.menus; {
//     if (newItem.type === 'breakfast') {
//       restaurantMenu.breakfast.push(newItem);
//     } else if (newItem.type === 'lunch') {
//       restaurantMenu.lunch.push(newItem);
//     } else if (newItem.type === 'dinner') {
//       restaurantMenu.dinner.push(newItem);
//     }
    restaurantName.menus.lunch.push(newItem)
// }
};















function removeMenuItem(newRestaurant,removeItem, removeType ) {

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
