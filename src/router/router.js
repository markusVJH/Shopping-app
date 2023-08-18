import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Products from "../Products";
import Test from "../Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/test",
    element: <Test/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
]);

export default router;