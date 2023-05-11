import { createRouter, createWebHashHistory } from "vue-router";

import UsersOverview from "../pages/users/Overview.vue";

import TicketsOverview from "../pages/tickets/Overview.vue";
import CreateTicket from "../pages/tickets/Create.vue";
import ShowTicket from "../pages/tickets/TicketDetails.vue";
import EditTicket from "../pages/tickets/Edit.vue";

import CategoriesOverview from "../pages/categories/Overview.vue";
import CreateCategory from "../pages/categories/Create.vue";
import EditCategory from "../pages/categories/Edit.vue";

import ResponsesOverview from "../pages/responses/Overview.vue";

import LogIn from "../pages/Auth/Login.vue";
import Register from "../pages/Auth/Register.vue";

const routes = [
    { path: "/", component: TicketsOverview, name: "TicketsOverview" },
    {
        path: "/create-ticket",
        component: CreateTicket,
        name: "CreateTicket",
    },
    {
        path: "/show-ticket/:id",
        component: ShowTicket,
        name: "ShowTicket",
    },
    {
        path: "/ticket-edit/:id",
        component: EditTicket,
        name: "EditTicket",
    },
    {
        path: "/categories",
        component: CategoriesOverview,
        name: "CategoriesOverview",
    },
    {
        path: "/create-category",
        component: CreateCategory,
        name: "CreateCategory",
    },
    {
        path: "/responses",
        component: ResponsesOverview,
        name: "ResponsesOverview",
    },
    {
        path: "/edit-category/:id",
        component: EditCategory,
        name: "EditCategory",
    },
    {
        path: "/users",
        component: UsersOverview,
        name: "UsersOverview",
    },
    {
        path: "/login",
        name: "LogIn",
        component: LogIn,
    },
    // {
    //     path: "/logout",
    //     name: "LogOut",
    //     component: LogOut,
    // },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
