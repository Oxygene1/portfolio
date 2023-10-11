import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Learn } from "../pages/Learn";

export const Routes = () => {
  const routes = useRoutes([
    { path: "", element: <Home /> },
    { path: "learn", element: <Learn /> },
  ]);
  return routes;
};
