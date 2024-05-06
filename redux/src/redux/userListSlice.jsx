import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    users: [],
    loading: false
}


export const getAllUsers = createAsyncThunk('users', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res);
    return res.data;
})

export const userListSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        // HTTP request olmazsa reducers kullanılır!!!
    },  // olursa extraReducers kullanılır:
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        })
    }
})  

export const {} = userListSlice.actions  // Buraya sadece reducers içinde yazılanlar konulur.
export default userListSlice.reducer
