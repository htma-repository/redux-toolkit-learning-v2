import { createSlice } from "@reduxjs/toolkit";

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

export default drinkSlice.reducer;

export const { addDrinks, removeDrinks } = drinkSlice.actions;
