const store = require("./store/store");
const foodAction = require("./store/foodSlice").foodActions;

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(foodAction.addFood(1));
store.dispatch(foodAction.addFood(1));
store.dispatch(foodAction.addFood(1));
store.dispatch(foodAction.removeFood(3));

unsubscribe();
