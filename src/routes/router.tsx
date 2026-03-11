import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "../routes/publicRoutes";
import { adminRoutes } from "../routes/adminRoutes";

export const router = createBrowserRouter([publicRoutes, adminRoutes]);
