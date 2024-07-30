import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Tasks from "./components/Tasks/Tasks";
import Freinds from "./components/Friends/Freinds";
import { Profiles } from "./components/Profiles/Profiles";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // children: [
      //   {
      //     path: "/tasks",
      //     element: <Tasks />,
      //   },
      // ],
    },
    { path: "/tasks", element: <Tasks /> },
    { path: "/friends", element: <Freinds /> },
    { path: "/profiles", element: <Profiles /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
