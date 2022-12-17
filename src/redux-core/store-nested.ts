import redux from "redux";
import immer from "immer";

type Action = {
  type: string;
  payload: string;
};

const CHANGE_ADDRESS = "CHANGE_ADDRESS";

const initProfile = {
  firstName: "Hutama",
  lastName: "Trirahmanto",
  Address: {
    street: "Blok1",
    number: 2,
    city: "Tangerang",
    province: "Banten",
  },
};

const profileActionCreator = (city: string) => {
  return {
    type: CHANGE_ADDRESS,
    payload: city,
  };
};

const profileReducer = (state = initProfile, action: Action) => {
  switch (action.type) {
    case CHANGE_ADDRESS:
      return immer(state, (draft) => {
        draft.Address.city = action.payload;
      });

    default:
      return state;
  }
};

const store = redux.createStore(profileReducer);

console.log("Init Store", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated Store", store.getState());
});

store.dispatch(profileActionCreator("Jakarta"));

unsubscribe();
