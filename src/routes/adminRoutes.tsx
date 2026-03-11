import AdminLayout from "../admin/layouts/AdminLayout";
import AdminProducts from "../admin/pages/AdminProducts";
import Dashboard from "../admin/pages/Dashboard";

export const adminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "products",
      element: <AdminProducts />,
    },
  ],
};
