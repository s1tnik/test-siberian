import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import ROUTES from "./routes";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function Router() {
  return useRoutes([
    { path: ROUTES.HOME, element: <HomePage /> },
    { path: ROUTES.DASHBOARD, element: <DashboardPage /> },
    { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> },
    { path: "*", element: <Navigate to={ROUTES.NOT_FOUND} /> },
  ]);
}
