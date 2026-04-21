import { NavLink } from "react-router-dom";
import { navItems } from "../../data/navItems";

const MobileNavbar = () => {
  return (
    <>
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 flex justify-between px-1 shadow-[0_-2px_16px_rgba(0,0,0,0.07)] padding-bottom: env(safe-area-inset-bottom, 6px);">
        {navItems.map((i) => (
          <NavLink
            key={i.id}
            to={`/admin/${i.id}`}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5  py-2 cursor-pointer relative transition-colors
                  ${isActive ? "text-green" : "text-dark/50 hover:text-green"}`
            }
          >
            <div className="w-10 h-8 flex items-center justify-center rounded-xl transition-colors">
              <img src={i.icon} alt="" />
            </div>
            <span className="text-[10px] font-normal leading-none">
              {i.label}
            </span>
            {i.label === "შეკვეთები" && (
              <span className="absolute top-1.5 right-[calc(50%-22px)] w-4 h-4 bg-red rounded-full text-white text-[9px] flex items-center justify-center font-bold">
                2
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default MobileNavbar;
