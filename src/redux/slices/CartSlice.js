import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        add: (state , action) => {
            state.push(action.payload);
            
        },
        remove : (state , action) => {
            return state.filter( (obj) => { return obj.id !== action.payload } )
        },
    }
})

export const {add , remove} = cartSlice.actions;

export default cartSlice.reducer