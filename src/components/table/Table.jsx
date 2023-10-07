"use client";
import { useSession } from "next-auth/react";
import { statusValues } from "@/utils/statusValues";
import Button from "../control/Button";

const formattedDateTime = (date) => {
  return date.toLocaleString("en-US", {
    weekday: "short",
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

const Table = ({ orders }) => {
  const { data: session } = useSession();
  const role = session?.user?.role;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="rounded-lg">
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
                    {role === "biker" ? "Sender's Name" : "Biker's Name"}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    Pickup Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    Drop-off Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                  >
                    Status
                  </th>
                  {role === "biker" && (
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                    >
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders?.map((order) => (
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
                      {role === "biker"
                        ? order.senderId
                          ? order.sender.userName
                          : "-"
                        : order.bikerId
                        ? order.biker.userName
                        : "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-normal">
                      {order.pickupTimestamp
                        ? formattedDateTime(new Date(order.pickupTimestamp))
                        : "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-normal">
                      {order.deliveryTimestamp
                        ? formattedDateTime(new Date(order.deliveryTimestamp))
                        : "-"}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-normal">
                      <p className="border text-green-500 px-3 py-2 rounded">
                        {statusValues[order.status]}
                      </p>
                    </td>
                    {role === "biker" && (
                      <td className="px-6 py-4 text-sm font-medium whitespace-normal">
                        <Button status={order.status} id={order.id} />
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
