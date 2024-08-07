import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM } from "../actions/index";

export const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [...state, action.payload];
    case WISHLIST_REMOVE_ITEM:
      return state.filter(
        (wishListItem) => wishListItem.productId !== action.payload.productId
      );
    default:
      return state;
  }
};
