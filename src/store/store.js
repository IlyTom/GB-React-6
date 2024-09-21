import { configureStore } from '@reduxjs/toolkit';  
import productsReducer from '../slice/productsSlice.js';

export const store = configureStore({  
  reducer: {  
    products: productsReducer,  
  },  
});