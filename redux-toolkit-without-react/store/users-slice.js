const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const axios = require("axios");

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get("https://dummyjson.com/userss");
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const users = action.payload.users.map((user) => user.id);
      state.data = users;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.data = [];
    });
  },
});

module.exports = usersSlice.reducer;

module.exports.fetchUsers = fetchUsers;
