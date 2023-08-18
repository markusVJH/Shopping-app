import {
  RouterProvider,
} from "react-router-dom";
import './App.css';
import router from "./router/router";
import Nav from "./Nav";


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
