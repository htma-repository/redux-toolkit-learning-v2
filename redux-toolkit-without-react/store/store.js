const { configureStore } = require("@reduxjs/toolkit");
const foodSlice = require("./foodSlice");

const store = configureStore({
  reducer: {
    food: foodSlice,
  },
});

module.exports = store;
