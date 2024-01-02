"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { ArrowDown, ArrowUp, CalendarIcon } from "lucide-react";
import React from "react";
import { DateRange } from "react-day-picker";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
} from "recharts";

type Props = {
  className?: string;
};

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

const Statistics = (props: Props) => {
  const { className } = props;
  const defaultSelected: DateRange = {
    from: addDays(new Date(), -6),
    to: new Date(),
  };
  const [range, setRange] = React.useState<DateRange | undefined>(
    defaultSelected
  );
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Statistics</CardTitle>

        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !range && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {range?.from
                  ? !range?.to
                    ? format(range.from, "MMM dd, yyyy")
                    : `${format(range.from, "MMM dd, yyyy")} - ${format(
                        range.to,
                        "MMM dd, yyyy"
                      )}`
                  : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="range"
                selected={range}
                onSelect={setRange}
                min={2}
                max={7}
                disabled={{
                  after: new Date(),
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
      <CardContent className="h-full">
        <div className="flex mb-6 gap-10">
          <div className="flex gap-4">
            <span className="bg-blue-200 rounded p-2 flex items-center justify-center w-10 h-10">
              <ArrowUp size={16} className="stroke-blue-600" />
            </span>
            <div className="flex flex-col">
              <div className="text-lg font-bold">$ 4,000</div>
              <div className="text-xs text-gray-400">Income</div>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="bg-orange-200 rounded p-2 flex items-center justify-center w-10 h-10">
              <ArrowDown size={16} className="stroke-orange-600" />
            </span>
            <div className="flex flex-col">
              <div className="text-lg font-bold">$ 2,000</div>
              <div className="text-xs text-gray-400">Expense</div>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%" className="max-h-96">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke="#E5E7EB" vertical={false} />
            <XAxis dataKey="day" className="text-gray-400 text-sm" />
            <YAxis
              className="text-gray-400 text-sm"
              // format it to K for thousands
              tickFormatter={(value) => {
                if (value > 1000) {
                  return `$${value / 1000}K`;
                }
                return `$${value}`;
              }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "none",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
              }}
              cursor={<Rectangle fill="#000" opacity={0.1} />}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      <div className="">{payload[0].payload.date}</div>

                      <div className="flex items-end gap-4">
                        <div className="flex flex-col">
                          <div className="text-xs text-gray-400 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-blue-500 block"></span>
                            Income
                          </div>
                          <div className="flex items-end gap-2">
                            <h2 className="text-2xl font-bold whitespace-nowrap">
                              $ {payload[0].value}
                            </h2>{" "}
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <div className="text-xs text-gray-400 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-orange-500 block"></span>
                            Expense
                          </div>
                          <div className="flex items-end gap-2">
                            <h2 className="text-2xl font-bold whitespace-nowrap">
                              $ {payload[1].value}
                            </h2>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="income"
              fill="#304FFD"
              barSize={15}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="expense"
              fill="#FF965D"
              barSize={15}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Statistics;
