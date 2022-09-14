import { SHOW_POSTS_CONTAINER } from "./actions";

const initialState = {
  showPosts: false,
};

const postsContainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POSTS_CONTAINER: {
      return { ...state, showPosts: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default postsContainerReducer;
