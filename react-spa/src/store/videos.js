import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import Axios from 'axios';
import apiConfig from '../config/api';

let videosSlice = createSlice({
    name: 'videos',
    initialState: {
        status: '',
        data: {
            videos: [],
            nextPage: 1,
            total: 1
        }
    },
    reducers: {},
    extraReducers: {}
});

export default videosSlice.reducer
