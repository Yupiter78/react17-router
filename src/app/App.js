import React from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Post from "./components/Post";
import PostList from "./components/PostList";

const App = () => {
    const posts = [
        { _id: 1, label: "Post 1" },
        { _id: 2, label: "Post 2" },
        { _id: 3, label: "Post 3" }
    ];
    return (
        <>
            <NavBar />
            <h1>App</h1>
            <Switch>
                <Route
                    path="/posts/:postId"
                    render={(props) => <Post posts={posts} {...props} />}
                />
                <Route
                    path="/posts"
                    render={(props) => <PostList posts={posts} {...props} />}
                />

                <Route path="/dashboard/stats" component={Stats} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Home} />
            </Switch>
        </>
    );
};

export default App;
