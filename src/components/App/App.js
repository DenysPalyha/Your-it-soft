import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersAC } from "../../store/users/actionCreators";
import Layout from "../Layout";
import Header from "../Header";
import CardsContainer from "../CardsContainer";
import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAC());
  }, []);

  return (
    <div className={styles.containerApp}>
      <Layout>
        <Header />
        <CardsContainer />
      </Layout>
    </div>
  );
}

export default App;
