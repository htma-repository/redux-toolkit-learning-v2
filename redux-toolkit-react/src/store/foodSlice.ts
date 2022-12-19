import { createSlice } from "@reduxjs/toolkit";
import { addDrinks, removeDrinks } from "./drinkSlice";

const initialState = {
  foodQuantity: 10,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.foodQuantity += action.payload;
    },
    removeFood: (state, action) => {
      state.foodQuantity -= action.payload;
    },
  },
  // extraReducers: {
  //   ["drink/addDrinks"]: (state, action) => {
  //     console.log("drink/removeDrinks", state.quantity);
  //     state.quantity++;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(addDrinks, (state) => {
      state.foodQuantity++;
    });
    builder.addCase(removeDrinks, (state) => {
      state.foodQuantity--;
    });
  },
});

export default foodSlice.reducer;
export const { addFood, removeFood } = foodSlice.actions;
