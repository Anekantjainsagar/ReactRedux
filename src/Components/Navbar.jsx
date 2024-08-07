import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const store = useSelector((state) => state);

  return (
    <div className="fixed w-full top-0 left-0 z-50 py-4 px-6 backdrop-blur-sm flex items-center justify-between">
      <h1
        className="text-4xl font-semibold cursor-pointer"
        onClick={(e) => {
          navigate("/");
        }}
      >
        Shopping
      </h1>
      <div className="flex items-center text-3xl">
        <div
          onClick={() => {
            navigate("/cart");
          }}
          className="mr-10 cursor-pointer relative"
        >
          <span className="absolute text-base -right-3.5 -top-3.5 border rounded-full border-black w-[25px] h-[25px] flex items-center justify-center">
            {store?.cart?.length}
          </span>
          <FaShoppingCart />
        </div>
        <div className="cursor-pointer relative">
          <span className="absolute text-base -right-3.5 -top-3.5 border rounded-full border-black w-[25px] h-[25px] flex items-center justify-center">
            {store?.wishlist?.length}
          </span>
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
