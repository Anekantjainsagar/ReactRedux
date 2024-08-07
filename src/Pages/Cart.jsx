import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../store/action-creators";

const Cart = () => {
  let store = useSelector((state) => state);

  return (
    <>
      <h1 className="px-7 mb-3 text-3xl">Cart</h1>
      <div className="px-8">
        {store?.cart
          ?.map((data) => {
            let temp = store?.products?.find(
              (el) => el?.id === data?.productId
            );
            return { ...data, ...temp };
          })
          ?.map((e, i) => {
            return <Block e={e} key={i} />;
          })}
      </div>
    </>
  );
};

const Block = ({ e }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="grid items-center p-2 border-gray-400 mb-5 rounded-md relative shadow-md shadow-gray-500 border border-gray-200"
      style={{ gridTemplateColumns: "40% 20% 20% 20%" }}
    >
      <div className="flex items-center mr-5">
        <img
          src={e?.image}
          alt={e?.title}
          className="h-[20vh] w-3/12 object-contain rounded-md p-2"
        />
        <div className="ml-2 w-9/12">
          <h1 className="text-xl font-semibold line-clamp-1">{e?.title}</h1>
          <p className="line-clamp-1">{e?.description}</p>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-center">Rs. {e?.price}</h3>
      <div className="flex items-center justify-center text-2xl">
        <button
          onClick={() => {
            dispatch(increaseQuantity(e.id));
          }}
          className="w-[35px] h-[35px] bg-gray-200 rounded-md flex justify-center items-center"
        >
          +
        </button>
        <p className="mx-3">{e?.quantity}</p>
        <button
          onClick={() => {
            if (e?.quantity != 1) {
              dispatch(decreaseQuantity(e.id));
            }
          }}
          disabled={e?.quantity == 1}
          className={`w-[35px] h-[35px] bg-gray-200 rounded-md flex justify-center items-center ${
            e?.quantity === 1 ? "text-gray-400" : "text-black"
          }`}
        >
          -
        </button>
      </div>
      <h3 className="text-lg font-semibold text-center">
        Rs. {e?.price * e?.quantity}
      </h3>
    </div>
  );
};

export default Cart;
