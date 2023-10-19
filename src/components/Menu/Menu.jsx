import { useEffect } from "react";
import { CategoryProvider } from "../../context/CategoryContext";
import { DishesProvider } from "../../context/DishesContext";
import { ModalCartProvider } from "../../context/modalContext";
import ModalCart from "../ModalCart";
import Dishes from "./Dishes";
import Navbar from "./Navbar";
import { socket } from "../../utils/io";

export const Menu = () => {
  useEffect(() => {
    socket.on("message", ()=> {
      console.log('cliente conectado')
    })

    return () => {
      socket.off('message')
    }
  }, []);
  return (
    <ModalCartProvider>
      <DishesProvider>
        <CategoryProvider>
          <Navbar />
          <Dishes />
          <ModalCart />
        </CategoryProvider>
      </DishesProvider>
    </ModalCartProvider>
  );
};
