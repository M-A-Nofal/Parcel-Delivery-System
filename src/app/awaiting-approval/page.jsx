"use client";
import { useQuery } from "@tanstack/react-query";
import { statusValues } from "@/utils/statusValues";
import React, { useState } from "react";
import Model from "@/components/table/Model";
import Loader from "@/components/Loader";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState("");

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/order-waiting").then((res) =>
        res.json()
      ),
  });

  if (isLoading === "loading") return <Loader />;

  return (
    <div className=" w-[95%] m-auto py-6 px-3">
      <div className="flex flex-col">
        <p className="text-2xl font-bold mb-4">
          Parcels Awaiting Biker Approval
        </p>
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="rounded-lg">
              {data?.length === 0 ? (
                <p className="text-xl text-gray-500">
                  There are currently no Parcels in waiting
                </p>
              ) : (
                <table className="w-full md:max-w-4xl lg:max-w-6xl xl:max-w-screen-2xl mx-auto shadow-md divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        Descriptions
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        Pickup Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        Drop-off Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        Customer Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {data?.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-normal">
                          {order.description}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-normal">
                          {order.pickupAddress}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-normal">
                          {order.dropoffAddress}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-normal">
                          {order.sender.userName}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium whitespace-normal text-green-500">
                          {statusValues[order.status]}
                        </td>
                        <td
                          className="px-6 py-4 text-sm font-medium whitespace-normal text-red-500 cursor-pointer hover:underline"
                          onClick={() => {
                            setShowModal(true);
                            setSelectedOrderId(order.id);
                          }}
                        >
                          Match
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <Model
                showModal={showModal}
                setShowModal={setShowModal}
                orderId={selectedOrderId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
