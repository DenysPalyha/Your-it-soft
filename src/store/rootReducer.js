import { combineReducers } from "redux";
import usersReducer from "./users/usersReducer";
import postsContainerReducer from "./postsContainer/postsContainerReducer";
import postsReducer from "./posts/postsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  showPosts: postsContainerReducer,
  posts: postsReducer,
});

export default rootReducer;
