function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
  } else {
    return;
  }
};

function refundOrder(order, deliveryOrders) { // params could also be (ordernum, deliveries)
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === order) {
      deliveryOrders.splice([i], 1);
      return deliveryOrders;
    }
  }
}

function listItems(deliveryOrders) {
  var sandwiches = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    sandwiches.push(deliveryOrders[i].item);
  }
  return sandwiches.join(', ')
}



function searchOrder(orders, foodItem) {
  for (var i = ; i < orders.length; i++) {
    if (orders[i].item === foodItem) {
      return true
    }
  }
  return false
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
