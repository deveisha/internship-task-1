import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlice';
import ProductsSlice from './ProductsSlice';
const store = configureStore({
    reducer: {
        cart: cartSlice,
        products:ProductsSlice
       
    },
});

export default store;