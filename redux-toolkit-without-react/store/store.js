const { configureStore } = require("@reduxjs/toolkit");
const reduxLogger = require("redux-logger");
const foodReducer = require("./foodSlice");
const drinksReducer = require("./drinkSlice");
const usersReducer = require("./users-slice");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    food: foodReducer,
    drink: drinksReducer,
    users: usersReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});

module.exports = store;
