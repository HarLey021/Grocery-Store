import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const HeaderLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-2 bg-white">
        <Header />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HeaderLayout;
