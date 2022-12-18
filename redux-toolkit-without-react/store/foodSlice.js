const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  quantity: 10,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.quantity += action.payload;
    },
    removeFood: (state, action) => {
      state.quantity -= action.payload;
    },
  },
});

module.exports = foodSlice.reducer;
module.exports.foodActions = foodSlice.actions;
