import {
  CART_ADD_ITEM,
  CART_ITEM_DECREASE_QUANTITY,
  CART_ITEM_INCREASE_QUANTITY,
  CART_REMOVE_ITEM,
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
} from "../actions";

export function addToCart(id) {
  return {
    type: CART_ADD_ITEM,
    payload: { productId: id, quantity: 1 },
  };
}

export function removeFromCart(id) {
  return {
    type: CART_REMOVE_ITEM,
    payload: { productId: id },
  };
}

export function increaseQuantity(id) {
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId: id },
  };
}

export function decreaseQuantity(id) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId: id },
  };
}

export function addToWishlist(id) {
  return {
    type: WISHLIST_ADD_ITEM,
    payload: { productId: id },
  };
}

export function removeFromWishlist(id) {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: { productId: id },
  };
}
