import React from "react";
import NavBar from "./components/NavBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Posts from "./components/Posts";
import NotFound from "./components/NotFound";

const App = () => {
    return (
        <div className="ms-5 mt-3">
            <NavBar />
            <h1>App</h1>
            <Switch>
                <Route path="/posts/:postId?" component={Posts} />
                <Route path="/dashboard/stats" component={Stats} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Home} />
                <Route path="/404" component={NotFound} />
                <Redirect from="/admin" to="/dashboard" />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
};

export default App;
