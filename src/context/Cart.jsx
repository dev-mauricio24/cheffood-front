/* eslint-disable react/prop-types */
import { useReducer, createContext } from "react";
import { cartInitialState, cartReducer } from "../reducers/Cart";
import { TYPES } from "../actions/cart";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (dish) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: dish,
    });
    console.log('Aquí puedo generar otra acción')
  }

  const removeOneFromCart = (product) =>
    dispatch({
      type: TYPES.REMOVE_ONE_FROM_CART,
      payload: product,
    });

  const removeAllFromCart = (dish) =>
    dispatch({
      type: TYPES.REMOVE_ALL_FOM_CART,
      payload: dish,
    });

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  return { state, addToCart,  clearCart, removeAllFromCart, removeOneFromCart };
}

export function CartProvider({ children }) {
  const { state, addToCart,  clearCart, removeAllFromCart, removeOneFromCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeAllFromCart,
        removeOneFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
