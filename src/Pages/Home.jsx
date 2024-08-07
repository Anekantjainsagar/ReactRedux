import React, { useMemo } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
} from "../store/action-creators";

const Home = () => {
  let productList = useSelector((state) => state?.products);

  return (
    <>
      <h1 className="px-7 mb-3 text-3xl">Products</h1>
      <div className="grid grid-cols-5 gap-7 px-8 pb-10">
        {productList?.map((e, i) => {
          return <Block key={i} e={e} />;
        })}
      </div>
    </>
  );
};

const Block = ({ e }) => {
  const cart = useSelector((state) => state?.cart);
  const wishlist = useSelector((state) => state?.wishlist);
  const dispatch = useDispatch();

  const isExistInCart = useMemo(() => {
    return cart?.some((el) => el?.productId === e?.id);
  }, [cart, e?.id]);

  const isExistInWishlist = useMemo(() => {
    return wishlist?.some((el) => el?.productId === e?.id);
  }, [wishlist, e?.id]);

  return (
    <div className="flex flex-col items-center p-2 border-gray-400 rounded-md relative shadow-md shadow-gray-500 border border-gray-200 hover:scale-105 transition-all">
      <FaHeart
        className={`absolute right-2 ${
          isExistInWishlist ? "text-red-600" : "text-gray-500"
        } text-2xl top-2 cursor-pointer hover:text-red-600 transition-all`}
        onClick={() => {
          if (!isExistInWishlist) {
            dispatch(addToWishlist(e?.id));
          } else {
            dispatch(removeFromWishlist(e?.id));
          }
        }}
      />
      <img
        src={e?.image}
        alt={e?.title}
        className="h-[30vh] object-contain w-full rounded-md p-2"
      />
      <div className="w-full mt-2">
        <h1 className="text-xl font-semibold line-clamp-1">{e?.title}</h1>
        <h1 className="line-clamp-1">{e?.description}</h1>
        <h1 className="text-lg font-semibold">Rs. {e?.price}</h1>
        <div className="grid grid-cols-2 gap-x-2 mt-2">
          <button
            onClick={() => {
              if (isExistInCart) {
                dispatch(removeFromCart(e?.id));
              } else {
                dispatch(addToCart(e?.id));
              }
            }}
            className={`w-full ${
              !isExistInCart ? "bg-green-100" : "bg-red-100"
            } border rounded-md border-gray-300 py-2 font-semibold`}
          >
            {isExistInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
          <button className="w-full bg-yellow-100 border rounded-md border-gray-300 py-2 font-semibold">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
