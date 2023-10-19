import { useContext } from "react";
import Cart from './cart/Cart'
import ModalCartContext from "../context/modalContext";

const ModalCart = () => {
  const {modalCart, closeModal} = useContext(ModalCartContext)
  return (
    <div className={`modal ${modalCart && 'show'}`}>
      <h2 className='title'>Mi Pedido</h2>
      <button onClick={closeModal} className='modal__btn--close'>X</button>
      <Cart />
    </div>
  )
}

export default ModalCart
