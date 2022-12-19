import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  firstName: string;
}

interface UsersType {
  loading: boolean;
  data: User[];
  error: string;
}

const initialState: UsersType = {
  loading: false,
  data: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get("https://dummyjson.com/users");
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<{ users: User[] }>) => {
        const users = action.payload.users;
        state.data = users;
        state.loading = false;
        state.error = "";
      }
    );

    builder.addCase(fetchUsers.rejected, (state, action) => {
      if (action.error) {
        state.loading = false;
        state.data = [];
        state.error = action.error.message || "Failed Get Data";
      }
    });
  },
});

export default usersSlice.reducer;
