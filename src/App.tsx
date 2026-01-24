import Header from "./components/header/Header";
import Product from "./components/product/Product";
// import PersonalInfo from "./components/personalInfo/PersonalInfo";
// import Profile from "./components/profile/Profile";
// import Recover from "./components/recover/Recover";
// import Login from "./components/login/Login";
// import Registration from "./components/registration/Registration";

function App() {
  return (
    <>
      <div className="min-h-screen flex-col justify-center items-center">
        <Header />
        {/* <Registration />
        <Login />
        <Recover />
        <Profile />
        <PersonalInfo /> */}
        <Product />
      </div>
    </>
  );
}

export default App;
