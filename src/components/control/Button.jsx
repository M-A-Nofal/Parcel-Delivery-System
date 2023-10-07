"use client";

import { statusValues } from "@/utils/statusValues";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

const Button = ({ status, id }) => {
  const isNextStatusAllowed = status + 1 in statusValues;

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id, status }) => {
      return fetch(`http://localhost:3000/api/update-status/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: status + 1 }),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleClick = () => {
    if (isNextStatusAllowed) {
      mutation.mutate({ id, status });
    } else {
      console.error("Invalid status transition!");
    }
  };

  return (
    <button
      type="button"
      className={`border text-red-500 px-3 py-2 rounded ${
        isNextStatusAllowed ? "" : "cursor-not-allowed"
      }`}
      disabled={!isNextStatusAllowed}
      onClick={handleClick}
    >
      {!isNextStatusAllowed ? "No Action Avilable" : statusValues[status + 1]}
    </button>
  );
};

export default Button;
