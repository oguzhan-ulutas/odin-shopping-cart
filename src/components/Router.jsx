import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
