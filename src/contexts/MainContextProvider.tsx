import { useEffect, useState } from "react";
import { MainContext } from "./MainContext";
import type { CartItem } from "../types";

const MainContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartContent, setCartContent] = useState<CartItem[]>([]);

  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [toggleMenu]);

  return (
    <MainContext.Provider
      value={{
        toggleMenu,
        setToggleMenu,
        showFilter,
        setShowFilter,
        showCart,
        setShowCart,
        // productQuantity,
        // setProductQuantity,
        cartContent,
        setCartContent,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
