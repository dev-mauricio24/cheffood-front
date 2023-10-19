import { useContext } from "react";
import DishesContext from "../../context/DishesContext";
import { useCart } from "../../hooks/useCart";
import DishItem from "./DishItem";

const Dishes = () => {
  const { dishes } = useContext(DishesContext);
  const { addToCart } = useCart();

  return (
    <section className="dishes">
      <h2>Menú</h2>
      <div className="dishes__container">
        {dishes.length > 0 &&
          dishes.map((item) => (
            <DishItem key={item._id} dish={item} addToCart={addToCart} />
          ))}
      </div>
    </section>
  );
};

export default Dishes;
