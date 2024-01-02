"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUp } from "lucide-react";
import React from "react";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

type Props = {};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const TotalCard = (props: Props) => {
  return (
    <Card className="p-6 grid grid-cols-3 gap-4">
      <div className="">
        <div className="flex">
          <div className=" flex-1">
            <span className="text-xs text-gray-400">Total Income</span>
            <div className="flex items-end gap-2">
              <h2 className="text-2xl font-bold whitespace-nowrap">$ 1,000</h2>{" "}
              <span className="text-xs text-green-500 flex">
                <ArrowUp size={16} /> 10%
              </span>
            </div>
          </div>
          <div className="h-16 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <defs>
                  <linearGradient
                    id="colorPv"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                    className="text-green-500"
                  >
                    <stop offset="5%" stopColor="#304CFD" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#304CFD" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#304CFD"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex">
          <div className=" flex-1">
            <span className="text-xs text-gray-400">Total Expense</span>
            <div className="flex items-end gap-2">
              <h2 className="text-2xl font-bold whitespace-nowrap">$ 1,000</h2>{" "}
              <span className="text-xs text-green-500 flex">
                <ArrowUp size={16} /> 10%
              </span>
            </div>
          </div>
          <div className="h-16 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <defs>
                  <linearGradient
                    id="colorUv"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                    className="text-green-500"
                  >
                    <stop offset="5%" stopColor="#FF965D" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#FF965D" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#FF965D"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex">
          <div className=" flex-1">
            <span className="text-xs text-gray-400">Total Bonus</span>
            <div className="flex items-end gap-2">
              <h2 className="text-2xl font-bold whitespace-nowrap">$ 1,000</h2>{" "}
              <span className="text-xs text-green-500 flex">
                <ArrowUp size={16} /> 10%
              </span>
            </div>
          </div>
          <div className="h-16 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <defs>
                  <linearGradient
                    id="colorPv2"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                    className="text-green-500"
                  >
                    <stop offset="5%" stopColor="#304CFD" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#304CFD" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#304CFD"
                  fillOpacity={1}
                  fill="url(#colorPv2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TotalCard;
