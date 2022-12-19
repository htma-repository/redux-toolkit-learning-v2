import { configureStore } from "@reduxjs/toolkit";

import foodReducer from "./foodSlice";
import drinksReducer from "./drinkSlice";
import usersReducer from "./users-slice";

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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
