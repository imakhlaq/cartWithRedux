import { createSlice } from "@reduxjs/toolkit";
import Cart from "../components/Cart/Cart";

const cartSlice = createSlice({
  name: "cartToggle",
  initialState: {
    toggleCart: false,
    cartIteams: [],
  },
  reducers: {
    toggleCart(state) {
      state.toggleCart = !state.toggleCart;
    },

    addProductsToCart(state, action) {
      console.log(action.payload.id);
      const iteamExists = state.cartIteams.find(
        (iteam) => iteam.id === action.payload.id
      );
      if (iteamExists) {
        iteamExists.quantity++;
        iteamExists.total = iteamExists.quantity * iteamExists.price;
      } else {
        const newIteam = {
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
          total: 18,
          id: action.payload.id,
        };

        state.cartIteams.push(newIteam);
      }
    },

    increaseIteams(state, action) {
      console.log(action.payload.id);
      const iteam = state.cartIteams.find(
        (iteam) => iteam.id === action.payload.id
      );
      if (!iteam) {
        return;
      }
      iteam.quantity++;
      iteam.total = iteam.quantity * iteam.price;
    },

    removeIteams(state, action) {
      const iteam = state.cartIteams.find(
        (iteam) => iteam.id === action.payload.id
      );

      const iteamPos = state.cartIteams.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (!iteam) {
        return;
      }
      if (iteam.quantity === 1) {
        state.cartIteams.splice(iteamPos, 1);
      } else {
        iteam.quantity--;
        iteam.total = iteam.quantity * iteam.price;
      }
    },
  },
});

const cartReducer = cartSlice.reducer;
export default cartReducer;

export const cartActions = cartSlice.actions;
