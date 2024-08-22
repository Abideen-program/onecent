import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Tasks from "./components/Tasks/Tasks";
import Freinds from "./components/Friends/Freinds";
import Profiles from "./components/Profiles/Profiles";
import Languages from "./components/Profiles/Languages";
import Play from "./components/Play/Play";

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
    { path: "/play", element: <Play /> },
    { path: "/tasks", element: <Tasks /> },
    { path: "/friends", element: <Freinds /> },
    { path: "/profiles", element: <Profiles /> },
    { path: "/languages", element: <Languages /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
