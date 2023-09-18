import {createSlice} from '@reduxjs/toolkit';

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    data: [],
  },
  reducers: {
    addToWishList(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const {addToWishList} = wishListSlice.actions;
export default wishListSlice.reducer;
