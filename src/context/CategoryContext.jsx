/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import axios from "axios"


export const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  
  const getCategories = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/categories')
      setCategories(data.categories)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])
  
  return (
    <CategoryContext.Provider value={{
      categories
    }}>
      { children }
    </CategoryContext.Provider>
  )
}



export default CategoryContext