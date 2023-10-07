"use client";

import React from "react";
import Table from "./table/Table";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";

const BikerDashboard = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/order-biker").then((res) => res.json()),
  });

  if (isLoading === "loading") return <Loader />;

  return (
    <div className="w-[95%] m-auto">
      {data?.length === 0 ? (
        <p className="text-xl text-gray-500">
          You haven't selected any parcels for delivery. Please go to the
          "Awaiting Approval" page and choose an order.
        </p>
      ) : (
        <>
          <p className="text-2xl font-bold mb-4">List of your parcels </p>
          <div className=" ">
            <Table role={"biker"} orders={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default BikerDashboard;
