/* Copyright (C) 2019 Valeri Mladenov & Kristian Ivanov
 * Authors: Valeri Mladenov & Kristian Ivanov
 * This code is licensed under GNU AGPLv3
 */

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/parking-vratsa.scss?v=1.1.0";
import AdminLayout from "./layouts/Admin.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />} />
            <Redirect to="/admin/dashboard" />
        </Switch>
    </Router>,
    document.getElementById("root")
);
