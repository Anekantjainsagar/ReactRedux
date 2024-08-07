import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mt-20"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
