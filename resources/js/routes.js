/* Copyright (C) 2019 Valeri Mladenov & Kristian Ivanov
 * Authors: Valeri Mladenov & Kristian Ivanov
 * This code is licensed under GNU AGPLv3
 */

import Dashboard from "./views/Dashboard.jsx";
import Cars from "./views/Cars.jsx";
import AllCars from "./views/AllCars.jsx";
import Payments from "./views/Payments.jsx";
import Taxes from "./views/Taxes.jsx";
var routes = [
    {
        path: "/dashboard",
        name: "Табло",
        icon: "nc-layout-11",
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
        icon: "nc-icon nc-bus-front-12",
        component: AllCars,
        layout: "/admin"
    },
    {
        path: "/taxes",
        name: "Такси",
        icon: "nc-icon nc-money-coins",
        component: Taxes,
        layout: "/admin"
    },
    {
        path: "/payments",
        name: "Плащания",
        icon: "nc-icon nc-credit-card",
        component: Payments,
        layout: "/admin"
    },
];
export default routes;
