import {
  GET_USERS,
  SHOW_NEXT_USERS,
  SHOW_PREV_USERS,
  FILTER_USERS_NAME,
  IS_LOADING_USERS,
} from "./actions";
import produce from "immer";

const initialState = {
  users: [],
  currentUser: [],
  currentPosition: 3,
  filter: "",
  isLoadingUsers: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return produce(state, (draftState) => {
        draftState.users = action.payload;
        draftState.currentUser = draftState.users.filter(
          (user, index) => index <= draftState.currentPosition
        );
      });
    }

    case SHOW_NEXT_USERS: {
      return produce(state, (draftState) => {
        if (draftState.currentPosition < draftState.users.length + 1) {
          draftState.currentPosition += 4;
          draftState.currentUser = draftState.users.filter((user, index) => {
            return index <= draftState.currentPosition;
          });
          draftState.currentUser.splice(0, 4);
        }

        if (draftState.currentUser.length > 4) {
          draftState.currentUser.splice(0, 4);
        }
      });
    }

    case SHOW_PREV_USERS: {
      return produce(state, (draftState) => {
        if (
          draftState.currentPosition <= draftState.users.length + 1 &&
          draftState.currentPosition > 3
        ) {
          draftState.currentPosition -= 4;
          draftState.currentUser = draftState.users.filter((user, index) => {
            return index <= draftState.currentPosition;
          });
          if (draftState.currentUser.length > 4) {
            draftState.currentUser = draftState.currentUser.splice(-4, 4);
          }
        }
      });
    }

    case FILTER_USERS_NAME: {
      return produce(state, (draftState) => {
        draftState.filter = action.payload;

        draftState.currentUser = state.users.filter((user) => {
          return user.name.toLowerCase().includes(draftState.filter);
        });

        if (draftState.filter === "") {
          draftState.currentUser = draftState.users.filter(
            (user, index) => index <= draftState.currentPosition
          );
        }
      });
    }

    case IS_LOADING_USERS: {
      return produce(state, (draftState) => {
        draftState.isLoadingUsers = action.payload;
      });
    }

    default: {
      return state;
    }
  }
};

export default usersReducer;
