/* Copyright (C) 2019 Valeri Mladenov & Kristian Ivanov
 * Authors: Valeri Mladenov & Kristian Ivanov
 * This code is licensed under GNU AGPLv3
 */

import Dashboard from "./views/Dashboard.jsx";
import Cars from "./views/Cars.jsx";
import AllCars from "./views/AllCars.jsx";
import Payments from "./views/Payments.jsx";
import Settings from "./views/Settings.jsx";
var routes = [
    {
        path: "/dashboard",
        name: "Табло",
        icon: "nc-icon nc-bank",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/cars",
        name: "Заети места",
        icon: "nc-icon nc-tile-56",
        component: Cars,
        layout: "/admin"
    },
    {
        path: "/all",
        name: "Превозни средства",
        icon: "nc-icon nc-tile-56",
        component: AllCars,
        layout: "/admin"
    },
    {
        path: "/payments",
        name: "Плащания",
        icon: "nc-icon nc-money-coins",
        component: Payments,
        layout: "/admin"
    },
    {
        path: "/settings",
        name: "Настройки",
        icon: "nc-icon nc-settings-gear-65",
        component: Settings,
        layout: "/admin"
    }
];
export default routes;
