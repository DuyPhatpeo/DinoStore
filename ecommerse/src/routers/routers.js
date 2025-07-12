import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("@components/Home/Home")),
  },
  {
    path: "*",
    component: lazy(() => import("@components/NotFound/NotFound")),
  },
];
export default routes;
