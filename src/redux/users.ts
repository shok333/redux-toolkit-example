import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsersApi } from '../api/users';
import { IUser } from '../components/User/IUser';

interface IUsersState {
  current: IUser;
  list: Array<IUser>;
}

const initialCurrent: IUser = {
  name: '',
  id: 0,
  avatar: '',
}

const initialState: IUsersState = {
  current: initialCurrent,
  list: []
};

export const getUsers = createAsyncThunk(
  'getUsers',
  async () => {
    const response = await getUsersApi()

    return await response.json()
  }
)


const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeCurrent: (state, action) => {
      state.current = state.list.find(({id}) => id === action.payload) || initialCurrent;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.list = action.payload
      state.current = action.payload[0]
    })
  },
});

export const { changeCurrent } = counterSlice.actions;
export default counterSlice.reducer;