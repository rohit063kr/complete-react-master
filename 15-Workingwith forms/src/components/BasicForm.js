import useForm from "../hooks/use-form";

const BasicForm = function (props) {
  const {
    inputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
    setInputTouched: setNameInputTouched,
    enteredValue: enteredName,
    reset: nameInputReset,
    isEnteredInputInvalid: isEnteredNameInvalid,
  } = useForm((value) => value.trim() === "");

  const {
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    setInputTouched: setEmailInputTouched,
    enteredValue: enteredEmail,
    reset: EmailInputReset,
    isEnteredInputInvalid: isEnteredEmailInvalid,
  } = useForm((value) => value.includes("@"));

  const isFormInvalid = isEnteredNameInvalid;

  const formSubmitHandler = function (e) {
    e.preventDefault();
    setNameInputTouched(true);
    setEmailInputTouched(true);

    nameInputReset();
    EmailInputReset();
  };

  const inputClass = isFormInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={inputClass}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            id="name"
            type="text"
          />
          {isEnteredNameInvalid && <p>Please write valid user name</p>}
        </div>

        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className={inputClass}>
        <label
          htmlFor="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        >
          E-Mail Address
        </label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
