"use client";
import { GRAPHFILTER } from "@/data/graph";
import { useState } from "react";

const GraphTopDetails = () => {
  const [type, setType] = useState("All");

  const handleTimeFilter = (data: any) => {
    setType(data);
  };
  return (
    <div className="flex justify-between items-center py-3 px-5">
      <span>Revenue</span>
      <ul className="flex gap-2">
        {GRAPHFILTER?.map((item, index) => (
          <li
            key={index * Math.random()}
            className={`bg-blue-900 p-2 px-3 rounded-md cursor-pointer transition-all duration-300 ${
              index === 3
                ? "text-mainBg hover:bg-mainBg hover:text-slate-100"
                : "text-blue-500 hover:bg-blue-600 hover:text-slate-100"
            } ${
              type === item.title &&
              `${
                item.title === "1Y"
                  ? "bg-mainBg text-slate-100 bg-opacity-100"
                  : "bg-blue-500 text-slate-100 bg-opacity-100"
              }`
            }`}
            onClick={() => handleTimeFilter(item.title)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraphTopDetails;
