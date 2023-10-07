"use client";

import React from "react";
import Table from "./table/Table";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";

const SenderDashboard = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/order-sender").then((res) => res.json()),
  });

  if (isLoading === "loading") return <Loader />;

  return (
    <div className=" w-[95%] m-auto">
      {data?.length === 0 ? (
        <p className="text-xl text-gray-500">
          You haven't created any parcels yet. Please go to the "Create Parcel"
          page to create one.
        </p>
      ) : (
        <>
          <p className="text-2xl font-bold mb-4">List of your parcels </p>
          <div className="">
            <Table role={"customer"} orders={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default SenderDashboard;
