import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("@pages/Home/Home")),
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
  {
    path: "/product/:productId",
    component: lazy(() => import("@pages/ProductDetail/ProductDetail")),
  },
  {
    path: "*",
    component: lazy(() => import("@pages/NotFound/NotFound")),
  },
];

export default routes;
