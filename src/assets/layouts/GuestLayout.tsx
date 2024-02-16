import { Outlet } from "react-router-dom";
import Header from "../partials/Header";

export default function GuestLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}