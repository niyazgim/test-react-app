import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./assets/layouts/GuestLayout";
import Home from "./assets/pages/Home"
import Catalog from "./assets/pages/Catalog";

const router = createBrowserRouter([
  {
    path: '/test-react-app',
    element: <GuestLayout />,
    children: [
      {
        path: '/test-react-app',
        element: <Home />,
      },
      {
        path: '/test-react-app/catalog',
        element: <Catalog />,
      },
      // {
      //   path: '/login',
      //   element: <Login />,
      // },
      // {
      //   path: '/signup',
      //   element: <Signup />,
      // }
    ],
  }
])

export default router