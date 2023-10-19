/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const ModalCartContext = createContext();

export const ModalCartProvider = ({ children }) => {
  const [modalCart, setModalCart] = useState(false);

  const showModal = () => setModalCart(true);
  const closeModal = () => setModalCart(false);

  return (
    <ModalCartContext.Provider value={{
      modalCart,
      showModal,
      closeModal
    }}>
      { children }
    </ModalCartContext.Provider>
  )
}

export default ModalCartContext