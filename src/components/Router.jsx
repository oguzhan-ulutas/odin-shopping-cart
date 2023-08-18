import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./01-MainPage/01-MainPage";
import About from "./02-About/01-About";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/store",
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
