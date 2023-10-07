"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [inputs, setInputs] = useState({
    description: "",
    pickupAddress: "",
    dropoffAddress: "",
    status: 1,
    senderId: userId,
  });

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => {
      return fetch("http://localhost:3000/api/order-sender", {
        method: "POST",
        body: JSON.stringify({
          ...inputs,
        }),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutation.mutate();
    router.push("/");
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-md mb-8 shadow-lg rounded-lg bg-white">
      <h2 className="mb-4 text-3xl font-semibold text-center text-gray-900">
        Add New Parcel
      </h2>
      <p className="mb-6 text-sm text-gray-600 text-center">
        Please provide parcel details including descriptions and pickup/drop-off
        addresses.
      </p>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900">
            Parcel Descriptions
          </label>
          <input
            type="text"
            name="description"
            className="w-full px-3 py-2 mt-1 text-sm text-gray-900 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter Parcel Description"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900">
            Pickup Address
          </label>
          <input
            type="text"
            name="pickupAddress"
            className="w-full px-3 py-2 mt-1 text-sm text-gray-900 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter Pickup Address"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900">
            Drop-off Address
          </label>
          <input
            type="text"
            name="dropoffAddress"
            className="w-full px-3 py-2 mt-1 text-sm text-gray-900 bg-gray-100 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter Drop-off Address"
            required
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500"
        >
          Create Shipment
        </button>
      </form>
    </div>
  );
};

export default page;
