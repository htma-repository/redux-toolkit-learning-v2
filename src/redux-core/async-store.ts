import { legacy_createStore, applyMiddleware, Dispatch } from "redux";
import axios, { AxiosError, AxiosResponse } from "axios";
import thunk, { ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
// const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
// const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

enum ActionTypes {
  A = "FETCH_USERS_REQUESTED",
  B = "FETCH_USERS_SUCCEEDED",
  C = "FETCH_USERS_FAILED",
}

interface UsersData {
  id: number;
}

interface ActionA {
  type: ActionTypes.A;
  payload: boolean;
}

interface ActionB {
  type: ActionTypes.B;
  payload: UsersData[];
}

interface ActionC {
  type: ActionTypes.C;
  payload: string;
}

type Action = ActionA | ActionB | ActionC;
// type Action =
//   | { type: "FETCH_USERS_REQUESTED"; payload: boolean }
//   | { type: "FETCH_USERS_SUCCEEDED"; payload: UsersData[] }
//   | { type: "FETCH_USERS_FAILED"; payload: string };

interface State {
  loading: boolean;
  data: UsersData[];
  error: string | null;
}

const requestAction = (isLoading: boolean): Action => {
  return {
    type: ActionTypes.A,
    payload: isLoading,
  };
};

const successAction = (data: UsersData[]): Action => {
  return {
    type: ActionTypes.B,
    payload: data,
  };
};

const failedAction = (error: string): Action => {
  return {
    type: ActionTypes.C,
    payload: error,
  };
};

const initUserState = {
  loading: false,
  data: [],
  error: "",
};

const reducerFunc = (state: State = initUserState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.A:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionTypes.B:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case ActionTypes.C:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const userFetch = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(requestAction(true));
    try {
      const response: AxiosResponse<UsersData[]> = await axios.get(
        "https://dummyjson.com/users"
      );

      const users = response.data.map((user) => user.id);

      console.log(users);

      // dispatch(successAction(users));
    } catch (error) {
      if (error instanceof AxiosError || error instanceof Error) {
        dispatch(failedAction(error.message));
      }
    }
  };
};

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = legacy_createStore(reducerFunc, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

(store.dispatch as ThunkDispatch<State, unknown, Action>)(userFetch());
