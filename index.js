var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {

 var itemObject = {};

 itemObject[`${itemName}`] = Math.floor(Math.random()*100+1);
 cart.push(itemObject);
 console.log(`${itemName} has been added to your cart.`);
 return cart;

}

function viewCart()
{
    var itemArr = [];
    var itemValue = [];
    if(cart.length === 0)
    {
        console.log("Your shopping cart is empty.");
    }
    else if(cart.length === 1)
    {

        itemArr.push(Object.getOwnPropertyNames(cart[0])[0]);
        itemValue.push(Object.getOwnPropertyDescriptor(cart[0], itemArr[0]).value);
        console.log(`In your cart, you have ${itemArr[0]} at $${itemValue[0]}.`);
    }
    else if(cart.length === 2)
    {

      for(var i = 0; i <= cart.length+1; i++)
      {
        itemArr.push(Object.getOwnPropertyNames(cart[i+1])[i+1]);
        itemValue.push(Object.getOwnPropertyDescriptor(cart[i+1], itemArr[i+1]).value);
      }
      console.log(`In your cart, you have ${itemArr[0]} at $${itemValue[0]} and ${itemArr[1]} at $${itemValue[0]}.`);
    }

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
