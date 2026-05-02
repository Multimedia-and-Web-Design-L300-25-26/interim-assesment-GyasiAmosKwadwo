import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "./Footer";
import WarningBanner from "../common/WarningBanner";
import Loading from "../common/Loading";
import { testServer } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const RootLayout = () => {
  const { isLoading, isSuccess } = useQuery({
    queryKey: ["wakeup-server"],
    queryFn: () => testServer.checkActive(),
  });

  return (
    <div>
      {isLoading && <Loading />}
      <WarningBanner />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
