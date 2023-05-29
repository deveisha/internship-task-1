const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
     add:(state,action)=>{
        console.log(action.payload);
        state.data=[...state?.data,action.payload]
        console.log(state.data);

     },
     update:(state,action)=>{
        console.log(action.payload);
        const updated = state.data.findIndex(item => item.id === action.payload.id);
        if (updated !== -1) {
          state.data[updated].title=action.payload.title
          state.data[updated].price=action.payload.price
          state.data[updated].id=action.payload.id
        
        }
        console.log(updated)
       
     } ,
     asc:(state)=>{
        state.data.sort((a, b) => a.title.localeCompare(b.title));
     
     },
     desc:(state)=>{
       state.data.sort((a,b)=>b.title.localeCompare(a.title));
     },
     priceAsc:(state)=>{
        state.data.sort((a,b)=>a.price-b.price)
     },
     priceDesc:(state)=>{
        state.data.sort((a,b)=>b.price-a.price)
     }
     
    },
    
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setProducts,add,update,asc,desc,priceAsc,priceDesc} = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
});


