import { useContext } from "react";
import ModalCartContext from "../../context/modalContext";
import SidebarMenu from "./SidebarMenu";
import { useCart } from "../../hooks/useCart";

const Navbar = () => {
  const { showModal } = useContext(ModalCartContext);
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <img src="../public/logo.png" alt="Logo menu" />
      </div>
      <div className="header__icons">
        <button className="button btn__cart">
          <box-icon onClick={showModal} name="cart" size="md" />
          <span>{cart.length}</span>
        </button>
        <SidebarMenu />
      </div>
    </header>
  );
};

export default Navbar;
