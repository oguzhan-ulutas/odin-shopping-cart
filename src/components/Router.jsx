import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./01-MainPage/01-MainPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/home",
      element: <MainPage />,
    },
    {
      path: "/store",
    },
    {
      path: "/about",
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
