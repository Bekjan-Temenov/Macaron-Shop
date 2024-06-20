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
    }
})
export const {addToCart} = cartSlice.actions
export  default cartSlice.reducer