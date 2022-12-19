const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  drinksQuantity: 20,
};

const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: {
    addDrinks: (state, action) => {
      state.drinksQuantity += action.payload;
    },
    removeDrinks: (state, action) => {
      state.drinksQuantity -= action.payload;
    },
  },
});

module.exports = drinkSlice.reducer;

module.exports.drinksAction = drinkSlice.actions;
