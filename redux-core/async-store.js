// import { legacy_createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import axios from "axios";

const { legacy_createStore, applyMiddleware } = require("redux");
const axios = require("axios");
const thunk = require("redux-thunk").default;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const { data } = await axios.get("https://dummyjson.com/users");
      const users = data.users.map((user) => user.id);
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const store = legacy_createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
