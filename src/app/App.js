import React from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Home from "./components/Home";
import Stats from "./components/Stats";

const App = () => {
    return (
        <>
            <NavBar />
            <h1>App</h1>
            <Switch>
                <Route path="/posts" component={Posts} />
                <Route path="/dashboard/stats" component={Stats} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Home} />
            </Switch>
        </>
    );
};

export default App;
