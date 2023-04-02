import React from "react";

import style from "./CheckBox.module.css";

const CheckBox = (props) => {
  return (
    <div className={style["checkbox-rect"]}>
      <input
        checked={props.checked}
        onChange={props.onChange}
        type={props.type}
        id={props.id}
        name="check"
      />
      <label for={props.id}>{props.text}</label>
    </div>
  );
};

export default CheckBox;
