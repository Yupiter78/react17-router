import React from "react";
import { NavLink, Route } from "react-router-dom";
import Edit from "./Edit";
import Stats from "./Stats";

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard Components</h1>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink
                        to="/dashboard/edit"
                        className="nav-link"
                        activeClassName="active"
                    >
                        Edit
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/dashboard"
                        className="nav-link"
                        activeClassName="active"
                        exact
                    >
                        Dashboard
                    </NavLink>
                </li>
            </ul>
            <Route path="/dashboard/edit" component={Edit} />
            <Route path="/dashboard" exact component={Stats} />
        </>
    );
};

export default Dashboard;
