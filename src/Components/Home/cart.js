import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        carts: [],
        totalItems: 0,
        isLoading: false,
        error: "",
    },
    reducers: {
        addToCart(state, action) {
            const id = action.payload.id;
            const findProductIndex = state.carts.findIndex((x) => x.id === id);
            if (findProductIndex !== -1) {
                state.carts[findProductIndex].quantity++;
            } else {
                state.carts.push({ ...action.payload, quantity: 1 });
                state.totalItems++;
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.carts.find((x) => x.id === id);
            if (item) {
              item.quantity = quantity;
            }
          },
    }
})
export const {addToCart , updateQuantity , totalItems} = cartSlice.actions
export  default cartSlice.reducer