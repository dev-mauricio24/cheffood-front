import { useContext, useRef } from "react";
import CategoryContext from "../../context/CategoryContext";
import DishesContext from "../../context/DishesContext";

const SidebarMenu = () => {
  const { categories } = useContext(CategoryContext);
  const { getDishes } = useContext(DishesContext);
  const menu = useRef();

  const handleShowMenu = () =>  menu.current.classList.toggle('active')
  
  const handleClick = async(e) => {
    const cat = e.target.textContent
    await getDishes(cat)
    menu.current.classList.remove('active')
  }

  return (
    <>
      <button onClick={handleShowMenu} className="menu-button button">
      <box-icon name='menu' size="md" ></box-icon>
      </button>
      
      <aside ref={menu} className="menu">
        <h2>Categorías</h2>
        <ul>
          {categories.length > 0 &&
            categories.map((cat) => (
              <li key={cat._id} data-id={cat._id}>
                <a href="#" onClick={handleClick}>{cat.name}</a>
              </li>
            ))}
        </ul>
      </aside>
    </>
  );
};

export default SidebarMenu;
