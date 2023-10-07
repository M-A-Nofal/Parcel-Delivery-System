"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Model = ({ showModal, setShowModal, orderId }) => {
  const [pickupDate, setPickupDate] = useState(new Date());
  const [droofDate, setDeroofDate] = useState(new Date());

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ orderId }) => {
      return fetch(`http://localhost:3000/api/order-waiting/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pickupTimestamp: pickupDate,
          deliveryTimestamp: droofDate,
        }),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleClick = () => {
    mutation.mutate({ orderId });
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center">
                    Choose Pickup and Delivery Dates
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex items-center justify-between">
                  <div>
                    <p>Pick-up Date</p>
                    <DatePicker
                      showTimeSelect
                      dateFormat="Pp"
                      selected={pickupDate}
                      onChange={(date) => setPickupDate(date)}
                    />
                  </div>
                  <div>
                    <p>Drop-off Date</p>
                    <DatePicker
                      showTimeSelect
                      dateFormat="Pp"
                      selected={droofDate}
                      onChange={(date) => setDeroofDate(date)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClick}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Model;
