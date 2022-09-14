import React, { useState } from "react";
import styles from "./Posts.module.scss";
import PropTypes from "prop-types";

function Posts({ id, title, body }) {
  const [showPostTitle, setShowPostTitle] = useState(false);

  const toggleShowPost = () => {
    setShowPostTitle((current) => !current);
  };

  return (
    <li className={styles.containerItem} onClick={toggleShowPost}>
      <h2 className={styles.heading}>{title}</h2>
      {showPostTitle && <p className={styles.postText}>{body}</p>}
    </li>
  );
}

Posts.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Posts;
