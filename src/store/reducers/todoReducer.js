const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]; //must copy/create a new array with the spread operator, cannot modify the state directly
    default:
      return state;
  }
};

export default todoReducer;
