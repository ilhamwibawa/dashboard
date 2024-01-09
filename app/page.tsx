"use client";

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

import ReactGridLayout, { Responsive, WidthProvider } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useEffect, useRef, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { cn } from "@/lib/utils";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Home() {
  const [value, setValue] = useLocalStorage("layout", {
    lg: [
      { i: "total", x: 0, y: 0, w: 12, h: 1, minW: 12, maxH: 2 },
      { i: "statistics", x: 0, y: 0, w: 8, h: 4, maxH: 4, minW: 6 },
      {
        i: "balance",
        x: 0,
        y: 0,
        w: 4,
        h: 4,
        minH: 4,
        maxH: 4,
        minW: 4,
      },
    ],
    md: [
      { i: "total", x: 0, y: 0, w: 12, h: 1, minW: 12, maxH: 2 },
      { i: "statistics", x: 0, y: 0, w: 8, h: 4, maxH: 4, minW: 6 },
      {
        i: "balance",
        x: 0,
        y: 0,
        w: 4,
        h: 4,
        minH: 4,
        maxH: 4,
        minW: 4,
      },
    ],

    sm: [
      { i: "total", x: 0, y: 0, w: 6, h: 3, static: true },
      { i: "statistics", x: 0, y: 0, w: 6, h: 4, static: true },
      { i: "balance", x: 0, y: 0, w: 6, h: 4, static: true },
    ],
    xxs: [
      { i: "total", x: 0, y: 0, w: 2, h: 3, static: true },
      { i: "statistics", x: 0, y: 0, w: 2, h: 4, static: true },
      { i: "balance", x: 0, y: 0, w: 2, h: 4, static: true },
    ],
  });

  const [onEditLayout, setOnEditLayout] = useState(false);
  const [itemDraggedId, setItemDraggedId] = useState<string | null>(null);

  const onLayoutChange = (
    _: ReactGridLayout.Layout[],
    allLayouts: ReactGridLayout.Layouts
  ) => {
    setValue(allLayouts as any);
  };

  const onDrop = (
    layout: ReactGridLayout.Layout[],
    item: ReactGridLayout.Layout,
    e: Event
  ) => {
    console.log(layout, item, e);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">Overview</h1>

        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={() => setOnEditLayout(!onEditLayout)}
          >
            {onEditLayout ? "Done" : "Edit Layout"}
          </Button>

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

      <div
        className="w-[200px] h-20 bg-blue-500 flex items-center justify-center"
        draggable={true}
        unselectable="on"
        // this is a hack for firefox
        // Firefox requires some kind of initialization
        // which we can do by adding this attribute
        // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
        id="def"
        onDrag={(e) => {
          setItemDraggedId(e.currentTarget.id);
        }}
        onDragEnd={(e) => {
          setItemDraggedId(null);
        }}
      >
        Droppable Element (Drag me!)
      </div>

      <div
        className="w-[200px] h-20 bg-blue-500 flex items-center justify-center"
        draggable={true}
        unselectable="on"
        // this is a hack for firefox
        // Firefox requires some kind of initialization
        // which we can do by adding this attribute
        // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
        id="abc"
        onDrag={(e) => {
          setItemDraggedId(e.currentTarget.id);
        }}
        onDragEnd={(e) => {
          setItemDraggedId(null);
        }}
      >
        Ini abc
      </div>

      <ResponsiveGridLayout
        className={cn("flex gap-4 w-full h-full", {
          "cursor-move opacity-50": onEditLayout,
        })}
        layouts={value as any}
        containerPadding={[0, 0]}
        onLayoutChange={onLayoutChange}
        isDraggable={onEditLayout}
        isResizable={onEditLayout}
        isDroppable={onEditLayout}
        onDrop={onDrop}
        useCSSTransforms={true}
        measureBeforeMount={false}
        droppingItem={{
          i: itemDraggedId || "",
          w: 2,
          h: 2,
        }}
      >
        <div key="total" className="w-full">
          <TotalCard />
        </div>
        <div key="statistics" className="w-full flex">
          <Statistics className="w-full" />
        </div>
        <div key="balance" className="w-full">
          <Balance />
        </div>
      </ResponsiveGridLayout>
    </>
  );
}
