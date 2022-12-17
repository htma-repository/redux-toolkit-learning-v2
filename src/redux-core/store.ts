import redux from "redux";

const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

export type Action = {
  type: string;
  payload: number;
};

const ADD_FOOD = "ADD_FOOD";
const REMOVE_FOOD = "REMOVE_FOOD";
const ADD_DRINKS = "ADD_DRINKS";
const REMOVE_DRINKS = "REMOVE_DRINKS";

const foodAddActionCreator = (quantity: number) => {
  return {
    type: ADD_FOOD,
    payload: quantity,
  };
};

const foodRemoveActionCreator = (quantity: number) => {
  return {
    type: REMOVE_FOOD,
    payload: quantity,
  };
};

const drinksAddActionCreator = (quantity: number) => {
  return {
    type: ADD_DRINKS,
    payload: quantity,
  };
};

const drinksRemoveActionCreator = (quantity: number) => {
  return {
    type: REMOVE_DRINKS,
    payload: quantity,
  };
};

const initFoodState = {
  quantity: 10,
};

const initDrinksState = {
  quantity: 20,
};

const foodReducer = (state = initFoodState, action: Action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        quantity: state.quantity + action.payload,
      };
    case REMOVE_FOOD:
      return {
        ...state,
        quantity: state.quantity - action.payload,
      };
    default:
      return state;
  }
};

const drinksReducer = (state = initDrinksState, action: Action) => {
  switch (action.type) {
    case ADD_DRINKS:
      return {
        ...state,
        quantity: state.quantity + action.payload,
      };
    case REMOVE_DRINKS:
      return {
        ...state,
        quantity: state.quantity - action.payload,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  food: foodReducer,
  drinks: drinksReducer,
});

const store = createStore(rootReducers);

const unsubscribe = store.subscribe(() => {
  console.log("Updated Store", store.getState());
});

const action = bindActionCreators(
  {
    foodAddActionCreator,
    foodRemoveActionCreator,
    drinksAddActionCreator,
    drinksRemoveActionCreator,
  },
  store.dispatch
);

// store.dispatch(foodActionCreator(1));
// store.dispatch(foodActionCreator(1));
// store.dispatch(foodActionCreator(1));

action.foodAddActionCreator(1);
action.foodAddActionCreator(1);
action.foodAddActionCreator(1);
action.foodRemoveActionCreator(1);
action.foodRemoveActionCreator(1);
action.foodRemoveActionCreator(1);
action.drinksAddActionCreator(1);
action.drinksAddActionCreator(1);
action.drinksAddActionCreator(1);
action.drinksRemoveActionCreator(1);
action.drinksRemoveActionCreator(1);
action.drinksRemoveActionCreator(1);

unsubscribe();