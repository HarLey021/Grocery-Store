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
        <div className="w-full h-14 bg-white flex justify-between items-center lg:h-27">
          <div className="w-14 h-full flex justify-center items-center gap-2 lg:w-29 ">
            <button
              className="cursor-pointer"
              onClick={() => navigate("/Home")}
            >
              <img
                className="w-8 h-8 lg:w-16 lg:h-16"
                src="bostani-logo.jpg"
                alt="logo"
              />
            </button>
          </div>

          <div className="h-full flex flex-1 flex-col justify-center items-center bg-[#56bf41]">
            <div className="flex gap-8 justify-center">
              <img
                className="hidden lg:flex w-25 h-25"
                src="dairy.png"
                alt="dairy-icon"
              />
              <div className="lg:flex flex-col items-center justify-center lg:gap-2">
                <h1 className="text-[14px] text-center text-white font-black   [text-shadow:-1px_1px_0_#000,-2px_1px_0_#000,-3px_1px_0_#000,-4px_1px_0_#000] lg:text-4xl">
                  <span className="text-yellow-300">წალკის</span> რძის
                  პროდუქტები
                </h1>
                <div className="flex items-center gap-2">
                  <img className="lg:hidden w-8 h-8" src="dairy.png" alt="" />
                  <h1 className="text-[14px] text-center text-white font-black   [text-shadow:-1px_1px_0_#000,-2px_1px_0_#000,-3px_1px_0_#000,-4px_1px_0_#000] lg:text-4xl">
                    ხილ-ბოსტნეული
                  </h1>
                  <img
                    className="lg:hidden w-8 h-8"
                    src="vegetables.png"
                    alt=""
                  />
                </div>
              </div>
              <img
                className="hidden lg:flex w-25 h-25"
                src="vegetables.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex gap-2 px-2 lg:gap-6 lg:p-8">
            <button className="cursor-pointer">
              <img
                className="w-5 h-5 lg:w-7 lg:h-7"
                src="cart.svg"
                alt="cart icon"
              />
            </button>

            <button
              onClick={() => navigate("/profile")}
              className="cursor-pointer"
            >
              <img
                className="w-5 h-5 lg:w-7 lg:h-7"
                src="person-header.svg"
                alt="human icon"
              />
            </button>

            <button
              onClick={() => setToggleMenu(true)}
              className="cursor-pointer"
            >
              <img
                className="w-5 h-5 lg:w-7 lg:h-7"
                src="menu.svg"
                alt="menu icon"
              />
            </button>
          </div>
        </div>

        {toggleMenu ? <Menu /> : ""}
      </div>
    </>
  );
};

export default Header;
