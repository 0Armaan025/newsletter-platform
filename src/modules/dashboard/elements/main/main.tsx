"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const Main = () => {
  const { user } = useUser();

  return (
    <div className="p-5 w-full bg-[#f9fafb]">
      <h1 className="text-2xl text-surface-900 font-medium">
        Hi {user?.fullName} 👋
      </h1>
    </div>
  );
};

export default Main;
