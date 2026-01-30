import { useNavigate } from "react-router-dom";
import Menu from "../menu/Menu";
import { useContext } from "react";
import type { MainContextType } from "../../types";
import { MainContext } from "../../contexts/MainContext";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { toggleMenu, setToggleMenu } =
    useContext<MainContextType>(MainContext);

  return (
    <>
      <div>
        <div className="w-full h-16 bg-white flex justify-between items-center p-4">
          <div className="flex gap-2">
            <img className="w-8 h-8" src="bostani-logo.jpg" alt="leaf icon" />
            <h1 className="text-3xl h-8 -mt-0.75">Fresh Market</h1>
          </div>

          <div className="flex gap-4">
            <button className="cursor-pointer">
              <img src="cart.svg" alt="cart icon" />
            </button>

            <button
              onClick={() => navigate("/profile")}
              className="cursor-pointer"
            >
              <img
                className="w-6 h-6"
                src="person-header.svg"
                alt="human icon"
              />
            </button>

            <button
              onClick={() => setToggleMenu(true)}
              className="cursor-pointer"
            >
              <img src="menu.svg" alt="menu icon" />
            </button>
          </div>
        </div>
        <img className="w-full" src="baneri.jpg" alt="" />
        {toggleMenu ? <Menu /> : ""}
      </div>
    </>
  );
};

export default Header;
