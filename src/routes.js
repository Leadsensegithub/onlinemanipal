import React from "react";
// Pages
const Landingpage = React.lazy(() => import("./pages/LandingPage/LandingPage"));



const routes = [
  { path: "/", name: "LandingPage", element: Landingpage, exact: true },

 
];

export default routes;
