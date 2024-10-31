import { createSlice } from "@reduxjs/toolkit";

interface AuthState{
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login(state){
            state.isAuthenticated = true;
            localStorage.setItem("isAuthenticated", "true")
        },
        logout(state){
            state.isAuthenticated = false;
            localStorage.removeItem("isAuthenticated")
        },
        checkAuth(state){
            const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
            state.isAuthenticated = isAuthenticated
        }
    }
})

export const { login, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;