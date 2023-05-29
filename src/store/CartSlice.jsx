import { Alert } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    CartProducts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let isItemExist = state.CartProducts.find(
        (item) => item.id === action?.payload.id
      );
      console.log(isItemExist)
      if (!isItemExist) {
        state.CartProducts.push({ ...action.payload, quantity: 1 });
      } else {
        let arr = [];
        state.CartProducts.map((item) => {
          if (item.id === action.payload.id) {
            arr.push({ ...item, quantity: item.quantity + 1 });
          } else {
            arr.push(arr);
          }
        });
        state.CartProducts = arr;
      }
      state.quantity++;
      state.totalAmount += action?.payload.price;
    },

    removeFromCart: (state, action) => {
      console.log(action.payload);
      const itemToRemoveIndex = state.CartProducts.findIndex(
        (item) => item.id === action.payload
       
      );
        

      if (itemToRemoveIndex !== -1) {
        state.CartProducts.splice(itemToRemoveIndex,1);
        <Alert severity="success">product removed successfully!</Alert>
      }
     state.quantity=state.quantity-1;
     
    },
    addItemQuantity: (state,action ) => {
      let arr2=[]
      console.log(action.payload);
      state.CartProducts = state.CartProducts.map((item) => {
      
        if (item.id === action.payload.id) {
          arr2.push({ ...item, quantity: item.quantity + 1 })
        } else {
          arr2.push(item);
        }
      });
      state.CartProducts=arr2
      console.log('cartproducts', arr2)

    },
    subtractItemQuantity(state, action) {
      let arr3=[]
      console.log(action.payload);
      state.CartProducts = state.CartProducts.map((item) => {
        if (item.id === action.payload.id && item.quantity>1) {
          console.log(item)
          arr3.push({ ...item, quantity: item.quantity - 1 })

        } else {
          arr3.push(item);
        }
      });
      state.CartProducts=arr3
      console.log('cartproductsremove', arr3)
  
    },

    }

}
);



export const {
  addToCart,
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
