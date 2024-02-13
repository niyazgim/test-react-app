import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./assets/layouts/GuestLayout";
import Home from "./assets/pages/Home"

const router = createBrowserRouter([
  {
    path: '/test-react-app/',
    element: <GuestLayout />,
    children: [
      {
        path: '/test-react-app/',
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