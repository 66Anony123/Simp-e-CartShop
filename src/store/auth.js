import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({

    name : 'auth',
    initialState : {isLoggedIn : false},
    reducers :{

    LoggedIn(state)
    {
        state.isLoggedIn = true;
    },

    LoggedOut(state)
    {
        state.isLoggedIn = false;
    }
    }
}
)

export const authAction = authSlice.actions;
export default authSlice;