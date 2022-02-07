import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    isInputInvalid: isNameInputInvalid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    setIsInputTouched: setIsNameInputTouched,
    reset: nameInputReset,
  } = useInput((value) => value.trim() === "");

  const {
    enteredValue: enteredEmail,
    isInputInvalid: isEmailInputInvalid,
    setIsInputTouched: setIsEmailInputTouched,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => !value.includes("@"));

  const isFormValid = !isNameInputInvalid && !isEmailInputInvalid;

  // Form submit
  const formSubmitHandler = function (e) {
    e.preventDefault();

    setIsNameInputTouched(true);
    setIsEmailInputTouched(true);

    if (!isFormValid) return;

    // Reset inputs
    nameInputReset();
    emailInputReset();
  };

  // Invalid classes conditional
  const nameInputClass = isNameInputInvalid
    ? "form-control invalid"
    : "form-control ";

  const emailInputClass = isEmailInputInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {isNameInputInvalid && <p>Name cannot be empty</p>}
      </div>

      <div className={emailInputClass}>
        <label htmlFor="email">Email</label>
        <input
          onChange={emailInputChangeHandler}
          type="text"
          id="email"
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {isEmailInputInvalid && <p>Email cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
