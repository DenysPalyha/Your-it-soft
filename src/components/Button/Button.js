import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Button = ({
  bgColor,
  textBtn,
  hendlerClik,
  positionText,
  leftPadding,
}) => {
  const showPosts = useSelector((store) => store.showPosts.showPosts);
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        textAlign: positionText,
        paddingLeft: leftPadding,
      }}
      className={!showPosts ? styles.btn : styles.btnActive}
      onClick={hendlerClik}
    >
      {textBtn}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  textBtn: PropTypes.node,
  hendlerClik: PropTypes.func,
  positionText: PropTypes.string,
};

Button.defaultProps = {
  bgColor: "",
  positionText: "",
  textBtn: "",
  hendlerClikOpenModal: () => {},
};

export default Button;
