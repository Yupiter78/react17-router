import React from "react";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import Posts from "./components/Posts";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
    return (
        <>
            <NavBar />
            <h1>App</h1>
            <Route path="/posts" component={Posts} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
        </>
    );
};

export default App;
