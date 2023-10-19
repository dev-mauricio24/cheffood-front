import { TYPES } from "../actions/cart";

export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

// update localStorage with state for cart
export const updateLocalStorage = (state) =>
  window.localStorage.setItem("cart", JSON.stringify(state));

export const cartReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const { _id } = action.payload;
      const productInCartIndex = state.findIndex((item) => item._id === _id);
      let newState;

      if (productInCartIndex >= 0) {
        newState = [
          ...state.slice(0, productInCartIndex),
          {
            ...state[productInCartIndex],
            quantity: state[productInCartIndex].quantity + 1,
          },
          ...state.slice(productInCartIndex + 1),
        ];
      } else {
        newState = [
          ...state,
          {
            ...action.payload, // product
            quantity: 1,
          },
        ];
      }
      updateLocalStorage(newState);
      return newState;
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      const itemToDelete = state.find(
        (item) => item._id === action.payload._id
      );
      let newState;

      if (itemToDelete.quantity > 1) {
        newState = [
          ...state.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        ];
      } else {
        newState = [...state.filter((item) => item._id !== action.payload._id)];
      }
      updateLocalStorage(newState);
      return newState;
    }

    case TYPES.REMOVE_ALL_FOM_CART: {
      const newState = state.filter((item) => item._id !== action.payload._id);
      updateLocalStorage(newState);
      return newState;
    }

    case TYPES.CLEAR_CART: {
      updateLocalStorage([]);
      return [];
    }

    default:
      return state;
  }
};
