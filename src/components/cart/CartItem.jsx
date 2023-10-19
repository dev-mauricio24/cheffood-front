import PropTypes from 'prop-types'
import { useCart } from "../../hooks/useCart";

const CartItem = ({ dish }) => {
  const {name, price, quantity, image} = dish;
  const { addToCart, removeAllFromCart, removeOneFromCart } = useCart();
  return (
    <article className="cart__item">
      <h3 style={{textAlign: 'center', marginBottom: '8px'}}>{name}</h3>
      <div className="cart__item_header">
        <img src={image?.url} alt={name} />
        <div className="cart__item_buttons">
          <button onClick={() => removeOneFromCart(dish)}>-1</button>
          <button onClick={() => addToCart(dish)}>+1</button>
          <button onClick={() => removeAllFromCart(dish)}>
          Eliminar
        </button>
        </div>
      </div>
      <footer>
        <p>Cantidad: <span>{quantity}</span></p>
        <p>Total: <span>${price * quantity}</span></p>
      </footer>
    </article>
  );
};

CartItem.propTypes = {
  dish: PropTypes.object
} 

export default CartItem;
