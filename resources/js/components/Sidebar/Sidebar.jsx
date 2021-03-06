/* Copyright (C) 2019 Valeri Mladenov & Kristian Ivanov
 * Authors: Valeri Mladenov & Kristian Ivanov
 * This code is licensed under GNU AGPLv3
 */

import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";

import logo from "../../logo.svg";

var ps;

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
        this.sidebar = React.createRef();
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1
            ? "active"
            : "";
    }
    render() {
        return (
            <div
                className="sidebar"
                data-color={this.props.bgColor}
                data-active-color={this.props.activeColor}
            >
                <div className="logo">
                    <a
                        href="https://vratsa.online"
                        className="simple-text logo-mini"
                    >
                        <div className="logo-img">
                            <img src={logo} alt="react-logo" />
                        </div>
                    </a>
                    <a
                        href="https://vratsa.online"
                        className="simple-text logo-normal"
                    >
                        Синя Зона Враца
                    </a>
                </div>
                <div className="sidebar-wrapper" ref={this.sidebar}>
                    <Nav>
                        {this.props.routes.map((prop, key) => {
                            return (
                                <li
                                    className={
                                        this.activeRoute(prop.path) +
                                        (prop.pro ? " active-pro" : "")
                                    }
                                    key={key}
                                >
                                    <NavLink
                                        to={prop.layout + prop.path}
                                        className="nav-link"
                                        activeClassName="active"
                                    >
                                        <i className={prop.icon} />
                                        <p>{prop.name}</p>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </Nav>
                </div>
            </div>
        );
    }
}

export default Sidebar;
