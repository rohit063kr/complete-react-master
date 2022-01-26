import React, { useReducer, useEffect, useContext, useRef } from "react";
import AuthContext from "../Context/auth-context";

import classes from "./Login.module.css";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const emailReducer = function (prevState, action) {
  if (action.type === "USER_INPUT")
    return { value: action.val, isValid: action.val.includes("@") };

  if (action.type === "EMAIL_VALIDATE")
    return { value: prevState.value, isValid: prevState.value.includes("@") };

  return { value: "", isValid: null };
};

const passwordReducer = function (prevState, action) {
  console.log(action.type);

  if ((action.type = "USER_INPUT")) {
    console.log(action.val, prevState.isValid);
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if ((action.type = "PASSWORD_VALIDATE"))
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 6,
    };

  return { value: "", isValid: null };
};

const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const authCtx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailAction] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPasswordAction] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const formValidReducer = function (_, action) {
    if (action.type === "USER_INPUT")
      return { isValid: passwordState.isValid && emailState.isValid };

    return { isValid: null };
  };

  const [formValidState, dispatchFormValidAction] = useReducer(
    formValidReducer,
    { isValid: null }
  );

  const { isValid: isEmailValid } = emailState;
  const { isValid: isPasswordValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatchFormValidAction({ type: "PASSWORD_VALIDATE" });
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [isPasswordValid, isEmailValid]);

  const emailChangeHandler = (event) => {
    dispatchFormValidAction({ type: "USER_INPUT" });
    dispatchEmailAction({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordAction({ type: "USER_INPUT", val: event.target.value });
    dispatchFormValidAction({ type: "USER_INPUT" });
  };

  const validateEmailHandler = () =>
    dispatchEmailAction({ type: "EMAIL_VALIDATE" });

  const validatePasswordHandler = () =>
    dispatchPasswordAction({
      type: "PASSWORD_VALIDATE",
      val: passwordState.value,
    });

  const submitHandler = (event) => {
    event.preventDefault();
    if (formValidState.isValid)
      authCtx.onLogin(emailState.value, passwordState.value);

    if (!emailState.isValid) return emailRef.current.focus();

    if (!passwordState.isValid) return passwordRef.current.focus();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          type="email"
          label="E-mail"
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordRef}
          label="Password"
          type="password"
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
