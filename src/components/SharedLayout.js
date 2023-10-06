import { Outlet } from "react-router-dom";
import NavLinks from "../navComponent/NavLinks";

function SharedLayout() {
  return (
    <>
      <NavLinks />
      <Outlet />
    </>
  );
}

export default SharedLayout;
