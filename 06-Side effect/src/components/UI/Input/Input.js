import React, { useImperativeHandle, useRef } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef(function (props, ref) {
  const inputRef = useRef();

  const active = function () {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: active,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
