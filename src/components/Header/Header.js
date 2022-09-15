import React, { useState } from "react";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { filterUsersAC } from "../../store/users/actionCreators";

import styles from "./Header.module.scss";

function Header() {
  const [valueInput, setValueInput] = useState("");

  const dispatch = useDispatch();

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
          <button className={styles.headerLogoLink}>Your it soft</button>
        </div>
        <div className={styles.containerSearch}>
          <form className={styles.formWrapper}>
            <input
              className={styles.headerInput}
              type="text"
              name="valueInput"
              placeholder="Search name"
              value={valueInput}
              onChange={(event) => {
                setValueInput(event.target.value);
              }}
              onBlur={() => {
                if (valueInput === "") {
                  dispatch(filterUsersAC(valueInput));
                }
              }}
            />
            <Button
              bgColor="#333348"
              textBtn="Search name"
              hendlerClik={(event) => {
                event.preventDefault();
                dispatch(filterUsersAC(valueInput));
              }}
              positionText="center"
            />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;