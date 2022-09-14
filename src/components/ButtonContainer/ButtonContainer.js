import React from "react";
import { useDispatch } from "react-redux";
import styles from "./ButtonContainer.module.scss";
import { ReactComponent as Previous } from "../../img/icon/previous.svg";
import { ReactComponent as Next } from "../../img/icon/next.svg";
import {
  showNextUsersAC,
  showPrevUsersAC,
} from "../../store/users/actionCreators";

function ButtonContainer() {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.btnPrevious}
        onClick={() => {
          dispatch(showPrevUsersAC());
        }}
      >
        <Previous className={styles.previousIcon} /> Previous
      </button>

      <button
        type="button"
        className={styles.next}
        onClick={() => {
          dispatch(showNextUsersAC());
        }}
      >
        Next <Next className={styles.nextIcon} />
      </button>
    </div>
  );
}

export default ButtonContainer;
