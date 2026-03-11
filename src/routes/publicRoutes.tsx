import HeaderLayout from "../layouts/HeaderLayout";
import Home from "../pages/Home";
import Login from "../components/login/Login";
import Registration from "../components/registration/Registration";
import Recover from "../components/recover/Recover";
import Profile from "../components/profile/Profile";
import PersonalInfo from "../components/personalInfo/PersonalInfo";

export const publicRoutes = {
  path: "/",
  element: <HeaderLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "registration",
      element: <Registration />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "recover",
      element: <Recover />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "personal-info",
      element: <PersonalInfo />,
    },
  ],
};
