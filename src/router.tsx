import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./assets/layouts/GuestLayout";
import Home from "./assets/pages/Home"
import Catalog from "./assets/pages/Catalog";
import ProductPage from "./assets/pages/ProductPage";
import SearchPage from "./assets/pages/SearchPage";

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
      {
        path: '/catalog/:id',
        element: <ProductPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
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