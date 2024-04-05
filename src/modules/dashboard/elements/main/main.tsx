"use client";
import DashboardOverViewCard from "@/shared/components/cards/overview.card";
import SubscribersChart from "@/shared/components/charts/subscribers.chart";
import { useUser } from "@clerk/nextjs";
import React from "react";

const Main = () => {
  const { user } = useUser();

  return (
    <>
      <div className="p-5 w-full bg-[#f9fafb]">
        <h1 className="text-2xl text-surface-900 font-medium">
          Hi {user?.fullName} 👋
        </h1>
        <p className="opactiy-[.7] text-sm">
          Here&apos;s how your publication is doing
        </p>
        <div className="w-full flex">
          <br />
          <DashboardOverViewCard />
          <SubscribersChart />
        </div>
      </div>
    </>
  );
};

export default Main;
