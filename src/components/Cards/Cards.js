import React from "react";
import Button from "../Button";
import styles from "./Cards.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { showPostsContainer } from "../../store/postsContainer/actionCreators";
import { getPostsAC } from "../../store/posts/actionCreaters";
import PropTypes from "prop-types";

function Cards({ id, name, email, phone }) {
  const showPosts = useSelector((store) => store.showPosts.showPosts);
  const dispatch = useDispatch();

  return (
    <div className={!showPosts ? styles.container : styles.activeContainer}>
      <p className={!showPosts ? styles.name : styles.activeText}>{name}</p>
      <a
        href={`mailto:${email}`}
        className={!showPosts ? styles.email : styles.activeText}
      >
        {email}
      </a>
      <a
        href={`tel:${phone}`}
        className={!showPosts ? styles.number : styles.activeTextLink}
      >
        {phone}
      </a>
      <div className={styles.btnWrapper}>
        <Button
          bgColor="#52519D"
          textBtn="Show posts"
          positionText="center"
          hendlerClik={() => {
            dispatch(getPostsAC(id));
            dispatch(showPostsContainer(true));
          }}
        />
      </div>
    </div>
  );
}

Cards.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Cards;
