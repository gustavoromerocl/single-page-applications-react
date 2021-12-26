import {
    configureStore,
    createSlice
} from '@reduxjs/toolkit';

let userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: ''
    },
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload;
        },
        logOut: (state) => {
            state.user = null;
        }
    }
});

//Action creators -> reduxjs tools produce los actions de forma interna con create slice
export const { signIn, logOut } = userSlice.actions;

export const store = configureStore({
    reducer:{
        user: userSlice.reducer
    }
})