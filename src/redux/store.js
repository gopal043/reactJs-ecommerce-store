import { configureStore } from "@reduxjs/toolkit";
import producerReducer from "./reducers/productReducer";
import cartReducer from './reducers/cartReducer';


const store = configureStore({
    reducer : {
        products:producerReducer,
        cart : cartReducer,
    }
});

export default store;