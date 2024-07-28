import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Learn } from "../pages/Learn";
import Learn_Index from "../pages/Learn_Index";
import Not_Found from "../pages/Not_Found";

export const Routes = () => {
  const routes = useRoutes([
    { path: "", element: <Home /> },
    {
      path: "learn",
      element: <Learn />,
      children: [
        { path: "", element: <Learn_Index /> },
        {
          path: "basic-structure",
          element: <div>Content would be available by next thread</div>,
        },
        {
          path: "tags",
          element: <div>Content would be available by next thread</div>,
        },
        {
          path: "attributes",
          element: <div>Content would be available by next thread</div>,
        },
        {
          path: "forms",
          element: <div>Content would be available by next thread</div>,
        },
      ],
    },
    { path: "*", element: <Not_Found /> },
  ]);
  return routes;
};
