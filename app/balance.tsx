"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type Props = {};

type Statistic = {
  income: number;
  expense: number;
  date: string;
  day: string;
};

const data: Statistic[] = [
  {
    income: 4000,
    expense: 2400,
    date: "2021-10-01",
    day: "Mon",
  },
  {
    income: 3000,
    expense: 1398,
    date: "2021-10-02",
    day: "Tue",
  },
  {
    income: 2000,
    expense: 9800,
    date: "2021-10-03",
    day: "Wed",
  },
  {
    income: 2780,
    expense: 3908,
    date: "2021-10-04",
    day: "Thu",
  },
  {
    income: 1890,
    expense: 4800,
    date: "2021-10-05",
    day: "Fri",
  },
  {
    income: 2390,
    expense: 3800,
    date: "2021-10-06",
    day: "Sat",
  },
  {
    income: 3490,
    expense: 4300,
    date: "2021-10-07",
    day: "Sun",
  },
];

const Balance = (props: Props) => {
  const [opacity, setOpacity] = React.useState({
    income: 1,
    expense: 1,
  });

  const handleMouseEnter = (o: any) => {
    const { dataKey } = o;

    setOpacity({
      ...opacity,
      [dataKey]: 0.5,
    });
  };

  const handleMouseLeave = (o: any) => {
    const { dataKey } = o;

    setOpacity({
      ...opacity,
      [dataKey]: 1,
    });
  };
  return (
    <Card className="bg-blue-700 text-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Balance</CardTitle>

        <Button variant="ghost" size="icon">
          <MoreHorizontal size={21} />
        </Button>
      </CardHeader>
      <CardContent className="h-full p-0 ">
        <div className=" px-4 mb-10">
          <span className="text-4xl font-bold">$27,500.00</span>
        </div>

        <ResponsiveContainer width="100%" height="100%" className="max-h-96">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              strokeOpacity={0.2}
            />

            <Tooltip
              contentStyle={{
                background: "rgba(0, 0, 0, 0.8)",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
              cursor={false}
            />
            <Legend
              align="left"
              verticalAlign="top"
              iconSize={0}
              wrapperStyle={{ top: -10, left: 10 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              formatter={(value, entry, index) => {
                return (
                  <div className="flex items-center gap-4">
                    <span
                      className="
                      bg-opacity-50 bg-white p-2 rounded-xl text-xs
                    "
                    >
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </span>
                  </div>
                );
              }}
            />
            <Line
              type="monotone"
              dataKey="income"
              dot={false}
              stroke="white"
              strokeOpacity={opacity.income}
            />
            <Line
              type="monotone"
              dataKey="expense"
              dot={false}
              stroke="white"
              strokeOpacity={opacity.expense}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Balance;
