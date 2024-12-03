import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../Components/Auth/store/slice"
import productsSlice from "../Components/Home/store/slice"
import cartsSlice from "../Components/Home/cart"

export const store = configureStore({
	reducer: {
		auth:authSlice,
		products:productsSlice,
		cart:cartsSlice
	},
})
