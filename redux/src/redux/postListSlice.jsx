import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    posts: []
}

export const getAllPosts = createAsyncThunk('posts', async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(res);
    return res.data;
})

export const postListSlice = createSlice({
    name: 'postList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
    }
})

export const {} = postListSlice.actions;
export default postListSlice.reducer;