import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import PostsContainer from "../PostsContainer";
import ButtonContainer from "../ButtonContainer";
import Preloader from "../Preloader";
import styles from "./CardsContainer.module.scss";

function CardsContainer() {
  const isLoadingUsers = useSelector((store) => store.users.isLoadingUsers);
  const currentUser = useSelector((store) => store.users.currentUser);
  const showPosts = useSelector((store) => store.showPosts.showPosts);

  return (
    <>
      <div className={styles.container}>
        {isLoadingUsers ? (
          <div>
            <Preloader />
          </div>
        ) : (
          <ul className={styles.list}>
            {currentUser.map(({ id, name, email, phone }) => (
              <li
                key={id}
                className={!showPosts ? styles.listItem : styles.listItemActive}
              >
                <Cards id={id} name={name} email={email} phone={phone} />
              </li>
            ))}
          </ul>
        )}

        <PostsContainer />
      </div>
      <ButtonContainer />
    </>
  );
}

export default CardsContainer;
