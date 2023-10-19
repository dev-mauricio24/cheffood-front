import { createContext, useEffect, useState } from "react"
import axios from "axios"


export const DishesContext = createContext()

// eslint-disable-next-line react/prop-types
export const DishesProvider = ({ children }) => {
  const [dishes, setDishes] = useState([])
  
  const getDishes = async (cat = '') => {
    try {
      const { data } = await axios.get(`http://localhost:8080/api/products?category=${cat}`)
      setDishes(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDishes()
  }, [])
  
  return (
    <DishesContext.Provider value={{
      dishes,
      getDishes
    }}>
      { children }
    </DishesContext.Provider>
  )
}

export default DishesContext
