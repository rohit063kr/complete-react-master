import { useState } from "react";

const useForm = function (validateInput) {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const isEnteredInputInvalid = validateInput(enteredValue) && inputTouched;

  const inputChangeHandler = function (e) {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = function (e) {
    setInputTouched(true);
  };

  const reset = function () {
    setEnteredValue("");
    setInputTouched(false);
  };

  return {
    inputBlurHandler,
    inputChangeHandler,
    setInputTouched,
    setEnteredValue,
    isEnteredInputInvalid,
    reset,
  };
};

export default useForm;
