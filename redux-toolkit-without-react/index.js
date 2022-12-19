const store = require("./store/store");
const foodAction = require("./store/foodSlice").foodActions;
const drinksAction = require("./store/drinkSlice").drinksAction;
const fetchUsers = require("./store/users-slice").fetchUsers;

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

// store.dispatch(foodAction.addFood(1));
// store.dispatch(foodAction.addFood(1));
// store.dispatch(foodAction.addFood(1));
// store.dispatch(foodAction.removeFood(1));
// store.dispatch(foodAction.removeFood(1));
// store.dispatch(foodAction.removeFood(1));

// store.dispatch(drinksAction.addDrinks(1));
// store.dispatch(drinksAction.addDrinks(1));
// store.dispatch(drinksAction.addDrinks(1));
// store.dispatch(drinksAction.removeDrinks(1));
// store.dispatch(drinksAction.removeDrinks(1));
// store.dispatch(drinksAction.removeDrinks(1));

store.dispatch(fetchUsers());

// unsubscribe();
