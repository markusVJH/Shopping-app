import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Test from './Test'
import Products from "./Products";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Test/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
