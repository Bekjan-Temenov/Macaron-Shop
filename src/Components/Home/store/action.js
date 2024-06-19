import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const {data} = await api.product();
      console.log(data)
      return data.results;
    }
  );    