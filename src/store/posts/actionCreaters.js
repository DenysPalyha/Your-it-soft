import axios from "axios";
import { GET_POSTS } from "./actions";

export const getPostsAC = (id) => async (dispatch) => {
  try {
    const { status, data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (status === 200) {
      const newPosts = data.filter((post) => post.userId === id);

      dispatch({ type: GET_POSTS, payload: newPosts });
    }
  } catch (err) {
    alert(err);
  }
};
