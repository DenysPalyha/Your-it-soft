import React, { useRef } from "react";
import useOnClickOutside from "./hooks/onClickOutside";
import { useSelector, useDispatch } from "react-redux";
import Posts from "../Posts/Posts";
import styles from "./PostsContainer.module.scss";

import { showPostsContainer } from "../../store/postsContainer/actionCreators";

function PostsContainer() {
  const node = useRef();
  const dispatch = useDispatch();
  const showPosts = useSelector((store) => store.showPosts.showPosts);
  const posts = useSelector((store) => store.posts.posts);

  useOnClickOutside(node, () => {
    if (showPosts) {
      dispatch(showPostsContainer(false));
    }
  });

  if (!showPosts) {
    return null;
  }

  return (
    <div ref={node}>
      <ul className={styles.list}>
        {posts.map(({ id, title, body }) => (
          <Posts key={id} id={id} title={title} body={body} />
        ))}
      </ul>
    </div>
  );
}

export default PostsContainer;
