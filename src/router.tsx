import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./assets/layouts/GuestLayout";
import Home from "./assets/pages/Home"

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // {
      //   path: '/',
      //   element: <Login />,
      // },
      // {
      //   path: '/',
      //   element: <Signup />,
      // }
    ],
  }
])

export default router