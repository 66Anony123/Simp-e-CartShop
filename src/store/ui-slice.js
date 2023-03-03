import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({

    name : 'ui',
    initialState : {notification:null},
    reducers :{

        showNotification(state,action){
            state.notification={
                open : action.payload.open,
            message : action.payload.message,
            type : action.payload.type
            }
        }
    }
})
export const uiAction = uiSlice.actions;
export default uiSlice;