const cartProductsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      /*
      Algorithm to:
      add items to the cart
      check if the item is already in the cart
      if so, don't add another item, just increase the quantity
      */

      const prodCode = action.payload.product.id;
      //check if there is another product with the same code in cart
      let found = false;
      let cart = [...state];
      let i;
      for (i = 0; i < cart.length; i++) {
        const prod = cart[i]; //copy the state because you cant modify state
        if (prod.product.id === prodCode) {
          prod.quantity += action.payload.quantity; //Updates the quantity if the item is already in the cart but not the items in cart
          found = true;
        }
      }
      if (!found) {
        cart.push(action.payload);
      }
      return cart; //must copy/create a new array with the spread operator, cannot modify the state directly
    default:
      return state;
  }
};

export default cartProductsReducer;

/*
 * create the action (similar to addTodo )
 * create the reducer (similar to todoReducer)
 * combine the new reducer into rootReducer ( reducer/index.js)
 * dispatch the action and send the addedProduct
 */
