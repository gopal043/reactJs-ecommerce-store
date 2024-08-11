import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
  loading: false,
  products: [],
  error: null,
};

// Create slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsRequest: (state) => {
      state.loading = true;
    },
    fetchProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
    },
  },
});

// Export actions
export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;

// Asynchronous thunk action
export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

// Export reducer
export default productSlice.reducer;
