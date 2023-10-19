/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types


const DishItem = ({ dish = {}, addToCart }) => {
  return (  
    <article className="card_dish">
      <div className="card__img">
        <img src={dish?.image?.url} alt={dish?.name} />
      </div>
      <div className="card__description">
        <h5>{dish?.name}</h5>
        <h6>${dish?.price}</h6>
        <button onClick={() => addToCart(dish)}>Agregar</button>
      </div>
    </article>
  )
}

export default DishItem