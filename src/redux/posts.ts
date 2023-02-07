import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPostsApi } from '../api/posts';
import { IPost } from '../components/Post/IPost';

interface IPostState {
  list: Array<IPost>
}

const initialState: IPostState = {
  list: []
};

export const getPosts = createAsyncThunk(
  'getPosts',
  async () => {
    const response = await getPostsApi()

    return await response.json()
  }
)

const counterSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.list.push({
        id: state.list.length,
        date: new Date(),
        text: action.payload.text,
        authorId: action.payload.authorId,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.list = action.payload
    })
  },
});

export const { addPost } = counterSlice.actions;
export default counterSlice.reducer;