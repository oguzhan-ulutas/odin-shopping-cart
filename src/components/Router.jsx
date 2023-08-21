import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./01-MainPage/01-MainPage";
import About from "./02-About/01-About";
import Store from "./03-Store/01-Store";
import ErrorPage from "./ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/store",
      element: <Store />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
