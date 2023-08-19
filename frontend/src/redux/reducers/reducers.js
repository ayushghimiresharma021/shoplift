import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    loading : true,
    user: null,
    error: null
}



const userReducer = createReducer(initialState,{
    LoadUserRequest : (state) => {
        state.loading = true ;
    },
    LoadUserSuccess : (state,action) => {
        state.loading = false
        state.isAuthenticated = true ;
        state.user = action.payload ;
    },
    LoadUserFail : (state,action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false ;
    },
    clearError : (state,action) => {
        state.null = null ;
        
    }
})

export default userReducer ;