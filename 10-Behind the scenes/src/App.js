import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [para, setPara] = useState(false);
  const [allowTogglePara, setAllowTogglePara] = useState(false);

  const togglePara = useCallback(
    function () {
      if (allowTogglePara) setPara((prevState) => !prevState);
    },
    [allowTogglePara]
  );

  const enableToggle = function () {
    setAllowTogglePara(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <p>{para && "this is new"}</p>
      <Button onClick={enableToggle}>allow toggle</Button>
      <Button onClick={togglePara}>Add para</Button>
    </div>
  );
}

export default App;
