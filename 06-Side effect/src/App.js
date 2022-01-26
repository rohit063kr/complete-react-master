import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Context/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!authCtx.isAuthenticated && <Login />}
        {authCtx.isAuthenticated && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
