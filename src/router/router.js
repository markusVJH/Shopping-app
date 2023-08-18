import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import ProductsList from "../ProductsList";
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
    element: <ProductsList/>,
  },
]);

export default router;