import { SHOW_POSTS_CONTAINER } from "./actions";

export const showPostsContainer = (payload) => {
  return { type: SHOW_POSTS_CONTAINER, payload };
};
