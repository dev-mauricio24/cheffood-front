import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, clearCart } = useCart();

  const totalCart = cart.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );

  if (cart.length === 0) return <h4>No hay productos en el carrito</h4>;

  return (
    <>
      <div className="cart">
        {cart.map((item) => (
          <CartItem key={item._id} dish={item} />
        ))}
        <p>
          <span>Valor Total</span> <strong>{totalCart}</strong>
        </p>
        <button onClick={clearCart}>Vaciar Carrito</button>

        <form>
          <div>
            <label htmlFor="inputCustomer">Nombre</label>
            <input type="text" name="customer" id="inputCustomer" />
          </div>
          <div>
            <label htmlFor="inputTable">Nombre</label>
            <input type="number" name="table" id="inputTable" />
          </div>
          <button>Realizar Pedido</button>
        </form>
      </div>
    </>
  );
};

export default Cart;
