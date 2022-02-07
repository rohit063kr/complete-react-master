import { useState } from "react";

const useInput = function (validityFunction) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const isInputInvalid = validityFunction(enteredValue) && isInputTouched;

  const inputChangeHandler = function (e) {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = function (e) {
    setIsInputTouched(true);
  };

  const reset = function () {
    setEnteredValue("");
    setIsInputTouched(false);
  };

  return {
    enteredValue,
    isInputInvalid,
    setIsInputTouched,
    inputBlurHandler,
    inputChangeHandler,
    reset,
  };
};

export default useInput;
