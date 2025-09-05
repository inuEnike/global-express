import Logo from "@/components/shared/Logo";
import React from "react";

const AdminDashboard = () => {
  let user = "admin"
  return (
    <div className="py-3 h-[100vh] flex flex-col items-center justify-center">
      <div className="bg-foreground w-[50%] p-5 rounded-md text-background shadow-md shadow-white text-center">
        <h1 className="text-2xl font-bold uppercase">
          Welcome to Xpress Global Delivery
        </h1>
        <p className="py-5 tracking-wider">
          Welcome back, {user}. You’ve arrived at your command center — the space
          where strategy meets action, where data transforms into decisions, and
          where every tool you need is within reach. Here, you have the power to
          oversee operations, track performance, manage users, and keep the
          system running at its best. Consider this your control hub, built to
          give you clarity, authority, and efficiency as you guide everything
          forward.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
