import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../Components/Auth/store/slice"
import productsSlice from "../Components/Home/store/slice"

export const store = configureStore({
	reducer: {
		auth:authSlice,
		products:productsSlice,
	},
})
