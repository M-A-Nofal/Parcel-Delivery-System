"use client";

import LayoutDashboard from "@/components/LayoutDashboard";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loader />;
  }

  if (status === "unauthenticated") {
    redirect("/login");
  }

  return (
    <>
      <LayoutDashboard />
    </>
  );
}
