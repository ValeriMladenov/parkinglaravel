/* Copyright (C) 2019 Valeri Mladenov & Kristian Ivanov
 * Authors: Valeri Mladenov & Kristian Ivanov
 * This code is licensed under GNU AGPLv3
 */

import React from "react";
import { Route, Switch } from "react-router-dom";

import DemoNavbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

import routes from "../routes";

var ps;

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "black",
            activeColor: "info"
        };
        this.mainPanel = React.createRef();
    }
    componentDidUpdate(e) {
        if (e.history.action === "PUSH") {
            this.mainPanel.current.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
        }
    }
    handleActiveClick = color => {
        this.setState({ activeColor: color });
    };
    handleBgClick = color => {
        this.setState({ backgroundColor: color });
    };
    render() {
        return (
            <div className="wrapper">
                <Sidebar
                    {...this.props}
                    routes={routes}
                    bgColor={this.state.backgroundColor}
                    activeColor={this.state.activeColor}
                />
                <div className="main-panel" ref={this.mainPanel}>
                    <DemoNavbar {...this.props} />
                    <Switch>
                        {routes.map((prop, key) => {
                            return (
                                <Route
                                    path={prop.layout + prop.path}
                                    component={prop.component}
                                    key={key}
                                />
                            );
                        })}
                    </Switch>
                    <Footer fluid />
                </div>
            </div>
        );
    }
}

export default Dashboard;
