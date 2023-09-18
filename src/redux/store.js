import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './PostSlice';
import wishListReducer from './WishListSlice';

export const store = configureStore({
  reducer: {
    post: PostReducer,
    wishList: wishListReducer,
  },
});
