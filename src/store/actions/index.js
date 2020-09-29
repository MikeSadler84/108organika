export const incrementCartCounter = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrementCartCounter = () => {
  return {
    type: "DECREMENT",
  };
};
export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: text,
  };
};
export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};
// Use the Id to choose what to remove
export const removeProduct = (productId) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: productId,
  };
};
