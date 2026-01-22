import Header from "./components/header/Header";
import Recover from "./components/recover/Recover";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";

function App() {
  return (
    <>
      <div className="min-h-screen flex-col justify-center items-center">
        <Header />
        <Registration />
        <Login />
        <Recover />
      </div>
    </>
  );
}

export default App;
