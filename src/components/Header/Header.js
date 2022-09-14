import React, { useState } from "react";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { filterUsersAC } from "../../store/users/actionCreators";

import styles from "./Header.module.scss";

function Header() {
  const [valueInput, setValueInput] = useState("");
  const [isInputShow, setIsInputShow] = useState(false);

  const dispatch = useDispatch();

  const toggleInputSearch = () => {
    setIsInputShow((current) => !current);
  };

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
          <button className={styles.headerLogoLink}>Your it soft</button>
        </div>
        <div className={styles.containerSearch}>
          <div className={styles.btnWrapper}>
            <Button
              bgColor="#333348"
              textBtn="Search"
              hendlerClik={toggleInputSearch}
              positionText="left"
              leftPadding="35px"
            />
          </div>
          {isInputShow && (
            <input
              className={styles.headerInput}
              type="text"
              name="valueInput"
              placeholder="Search name"
              value={valueInput}
              onChange={(event) => {
                setValueInput(event.target.value);
                dispatch(filterUsersAC(event.target.value));
              }}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
