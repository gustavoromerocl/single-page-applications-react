import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

export const signUp = createAsyncThunk('user/signUp', async ({credentials}) => {
    return credentials;
})

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
    },
    extraReducers: {
        [signUp.pending]: (state, action) => {
            state.status = 'loading';
        },
        [signUp.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.status = 'success';
        },
        [signUp.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
});

//Action creators -> reduxjs tools produce los actions de forma interna con create slice
export const { signIn, logOut } = userSlice.actions;

export default userSlice.reducer;