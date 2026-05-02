import React from "react";
import { Outlet } from "react-router-dom";
import NavbarDark from "../NavbarDark";
import FooterDark from "./FooterDark";
import WarningBanner from "../common/WarningBanner";

const DarkLayout = () => {
  return (
    <div>
      <NavbarDark />
      <WarningBanner />
      <div>
        <Outlet />
      </div>
      <FooterDark />
    </div>
  );
};

export default DarkLayout;
