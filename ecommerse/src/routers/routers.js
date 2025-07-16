import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("@pages/Home/Home")),
  },
  {
    path: "*",
    component: lazy(() => import("@pages/NotFound/NotFound")),
  },
  {
    path: "/shop",
    component: lazy(() => import("@pages/Shop/Shop")),
  },
  {
    path: "/about",
    component: lazy(() => import("@pages/AboutUs/AboutUs")),
  },
  {
    path: "/contact",
    component: lazy(() => import("@pages/Contact/Contact")),
  },
];
export default routes;
