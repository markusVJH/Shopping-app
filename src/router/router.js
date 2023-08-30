import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import ProductsList from "../ProductsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/products",
    element: <ProductsList/>,
  },
]);

export default router;