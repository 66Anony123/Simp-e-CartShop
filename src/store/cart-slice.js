import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name :'cart',
    initialState :{
        itemList :[],
        totalQuantity : 0,
        showCart : false
    },
    reducers :{
    
        addToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.itemList.find((item)=>newItem.id===item.id)
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice+=existingItem.price;
  
            }
            else
            {
                state.itemList.push({
                    id : newItem.id,
                    name : newItem.name,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price
              
                })
            
            }
          
            state.totalQuantity++;
        },
        removeFromCart(state,action){
      
            const newItem = action.payload;
            const existingItem = state.itemList.find((item)=>newItem===item.id)
            if(existingItem.quantity>1)
            {
                existingItem.quantity--;
                existingItem.totalPrice-=existingItem.price;
            }
            else{
               const index= state.itemList.findIndex((item)=>item.id===newItem)
               state.itemList.splice(index,1) 
            }
        },
        setShowCart(state){
state.showCart = !state.showCart;
        }

    } 
})

export const cartActions = cartSlice.actions;
export default cartSlice;