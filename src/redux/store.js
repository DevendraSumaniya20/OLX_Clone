import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './PostSlice';
import wishListReducer from './WishListSlice';
import {persistStore, persistReducer} from 'redux-persist';

export const store = configureStore({
  reducer: {
    post: PostReducer,
    wishList: wishListReducer,
  },
});
