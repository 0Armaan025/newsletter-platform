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

  return <div></div>;
};

export default SubscribersChart;
