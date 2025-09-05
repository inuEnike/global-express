import React from "react";
import { ImSpinner9 } from "react-icons/im";

const loading = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <ImSpinner9 className="text-3xl md:text-4xl animate-spin" />
      <h2 className="py-5 text-3xl font-bold">Loading Dashboard</h2>
    </div>
  );
};

export default loading;
