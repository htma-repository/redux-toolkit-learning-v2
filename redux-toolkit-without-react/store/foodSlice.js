const { createSlice } = require("@reduxjs/toolkit");
const { drinksAction } = require("./drinkSlice");

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
    builder.addCase(drinksAction.addDrinks, (state) => {
      state.foodQuantity++;
    });
  },
});

module.exports = foodSlice.reducer;
module.exports.foodActions = foodSlice.actions;
