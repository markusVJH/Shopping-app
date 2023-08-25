import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import router from "./router/router";
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          {router.routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;