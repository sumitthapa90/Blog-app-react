import React from "react";
import TopBar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./components/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const user = false;
  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/write">
            <Write />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
