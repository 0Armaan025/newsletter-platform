"use client";

import { useScroll } from "framer-motion";
import React, { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface subscribersAnalyticsData {
  month: string;
  count: string;
}

const SubscribersChart = () => {
  const [subscribersData, setSubscribersData] = useState<any>([]);

  const data = [
    { month: "Jan 2024", count: 21400 },
    { month: "Feb 2024", count: 30000 },
    { month: "March 2024", count: 50000 },
    { month: "April 2024", count: 31400 },
  ];

  return (
    <div className="my-5 p-5 border rounded bg-white w-full :h-[55vh] xl:h-[60vh]">
      {/* 2:06:57 */}

      <div className="w-full flex">
        <h3 className="font-medium">Active Subscribers</h3>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="opacity-[.5]">Shows all active subscribers</p>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#EB4898]" />
          <span className="pl-2 text-sm opacity-[.7]">Subscribers</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={"85%"} className={"mt-5"}>
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#EB4898"
            fill="#EB4898"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscribersChart;
