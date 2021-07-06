import "./App.css";
import { Header } from "./components/Header/Header";
import { LoginMain } from "./components/LoginMain/LoginMain";
import { Footer } from "./components/Footer/Footer";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TopMain } from "./components/TopMain/TopMain";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Top</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Top />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Top() {
  return (
    <body>
      <Header />
      <TopMain />
      <Footer />
    </body>
  );
}

function Login() {
  return (
    <body>
      <Header />
      <LoginMain />
      <Footer />
    </body>
  );
}

function Profile() {
  return <h2>Profile</h2>;
}
