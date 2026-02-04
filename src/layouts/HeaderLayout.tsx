import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useContext } from "react";
import type { MainContextType } from "../types";
import { MainContext } from "../contexts/MainContext";

const HeaderLayout: React.FC = () => {
  const { setShowCart, setShowFilter } =
    useContext<MainContextType>(MainContext);
  return (
    <div className="min-h-screen flex flex-col">
      <header
        onClick={() => {
          setShowFilter(false);
          setShowCart(false);
        }}
        className="sticky top-0 z-2 bg-white"
      >
        <Header />
      </header>
      <main
        onClick={() => {
          setShowFilter(false);
          setShowCart(false);
        }}
        className="flex-1"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HeaderLayout;
