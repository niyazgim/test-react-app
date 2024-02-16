import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./assets/layouts/GuestLayout";
import Home from "./assets/pages/Home"
import Catalog from "./assets/pages/Catalog";
// import ProductPage from "./assets/components/ProductPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/catalog',
        element: <Catalog />,
      },
      // {
      //   path: '/catalog/;id',
      //   element: <ProductPage />,
      // },
      // {
      //   path: '/login',
      //   element: <Login />,
      // },
      // {
      //   path: '/signup',
      //   element: <Signup />,
      // }
      // test
    ],
  }
])

export default router