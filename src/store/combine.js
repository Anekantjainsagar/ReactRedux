import { combineReducers, createStore } from "redux";

import { cartReducer } from "./reducers/cart";
import { productReducer } from "./reducers/products";
import { wishlistReducer } from "./reducers/wishlist";

export const store = createStore(
  combineReducers({
    cart: cartReducer,
    products: productReducer,
    wishlist: wishlistReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);
