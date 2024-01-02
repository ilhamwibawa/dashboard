import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download } from "lucide-react";
import TotalCard from "./total-card";
import Statistics from "./statistics";
import Balance from "./balance";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Overview</h1>

        <div className="flex gap-4">
          <Button variant="outline" size="icon">
            <Download size={21} />
          </Button>

          <Select defaultValue="7d">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-10">
        <TotalCard />

        <div className="grid grid-cols-3 gap-4 mt-4">
          <Statistics className="col-span-2" />

          <Balance />
        </div>
      </div>
    </>
  );
}
