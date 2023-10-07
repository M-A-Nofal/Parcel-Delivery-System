"use client";

import React from "react";
import BikerDashboard from "./BikerDashboard";
import { useSession } from "next-auth/react";
import SenderDashboard from "./SenderDashboard";

const LayoutDashboard = () => {
  const { data: session } = useSession();
  let role = session?.user?.role;

  return (
    <div className="w-full py-6 px-3">
      {role === "biker" ? <BikerDashboard /> : <SenderDashboard />}
    </div>
  );
};

export default LayoutDashboard;
