import React from "react";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="h-16 w-16 relative">
        <div className="animate-spin rounded-full border-t-8 border-b-8 border-gray-400 border-t-blue-500 absolute w-full h-full"></div>
      </div>
    </div>
  );
};

export default Loader;
