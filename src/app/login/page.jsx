"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userType, setUserType] = useState("sender");
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/");
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const signInData = await signIn("credentials", {
      email,
      password,
      userType,
      redirect: false,
    });

    if (signInData?.error) {
      setError(`Invalid ${userType} email or password. Please try again.`);
    } else {
      setError("");
      router.push("/");
    }
  };

  return (
    <div className="h-[calc(100vh-5rem)] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-medium text-center mb-6">
          Log in to your account 🔐
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 text-gray-800 border rounded-md outline-none text-sm transition duration-150 ease-in-out"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 text-gray-800 border rounded-md outline-none text-sm transition duration-150 ease-in-out"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">User Type</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="sender"
                  checked={userType === "sender"}
                  onChange={() => setUserType("sender")}
                  className="mr-2"
                />
                Sender
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="biker"
                  checked={userType === "biker"}
                  onChange={() => setUserType("biker")}
                  className="mr-2"
                />
                Biker
              </label>
            </div>
          </div>

          {error && <div className="mb-4 text-red-500">{error}</div>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
