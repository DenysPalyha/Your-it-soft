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
  type,
}) => {
  const showPosts = useSelector((store) => store.showPosts.showPosts);
  return (
    <button
      type={type}
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
  type: PropTypes.string,
};

Button.defaultProps = {
  bgColor: "",
  positionText: "",
  textBtn: "",
  type: "button",
  hendlerClikOpenModal: () => {},
};

export default Button;
