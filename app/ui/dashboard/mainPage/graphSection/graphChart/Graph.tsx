"use client";
import { GRAPHVALUE } from "@/data/graph";
import { useState } from "react";
import {
  Bar,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-main_clr border border-[#606676] rounded-md">
        <p className="border-b-[1px] px-2 py-1 border-[#606676] text-slate-400">
          {label}
        </p>
        <div className="flex flex-col gap-1 py-1">
          <div className="px-3 flex items-center gap-2 text-sm">
            <div className={`h-3 w-3 bg-[#4382f3] rounded-full`}></div>
            <p>{`${payload[0].dataKey} : ${payload[0].value}`}</p>
          </div>
          <div className="px-3 flex items-center gap-2 text-sm">
            <div className={`h-3 w-3 bg-[#8162c1] rounded-full`}></div>
            <p>{`${payload[1].dataKey} : ${payload[1].value}k`}</p>
          </div>
          <div className="px-3 flex items-center gap-2 text-sm">
            <div className={`h-3 w-3 bg-[#880AB5] rounded-full`}></div>
            <p>{`${payload[2].dataKey} : ${payload[2].value}`}</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
const Graph = () => {
  const [stateOpacity, setOpacity] = useState({
    Earning: 1,
    Order: 1,
    Refunds: 1,
    zero: 0,
  });

  const handleMouseEnter = (o: any) => {
    const { dataKey } = o;
    if (dataKey === "Earning") {
      setOpacity({ ...stateOpacity, Earning: 1, Order: 0.1, Refunds: 0.1 });
    }
    if (dataKey === "Order") {
      setOpacity({ ...stateOpacity, Earning: 0.1, Order: 1, Refunds: 0.1 });
    }
    if (dataKey === "Refunds") {
      setOpacity({ ...stateOpacity, Earning: 0.1, Order: 0.1, Refunds: 1 });
    }
  };

  const handleMouseLeave = (o: any) => {
    setOpacity({ ...stateOpacity, Earning: 1, Order: 1, Refunds: 1 });
  };

  return (
    <div className="py-10 min-h-[400px]">
      <ResponsiveContainer width="100%" aspect={2}>
        <ComposedChart
          data={GRAPHVALUE}
          barCategoryGap={16}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="title" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Line
            dataKey="Order"
            stroke="#4382f3"
            width={4}
            dot={false}
            strokeWidth={3}
            legendType="circle"
            strokeOpacity={stateOpacity.Order}
          />

          <Line
            type="monotone"
            dataKey="Refunds"
            stroke="#880AB5"
            dot={false}
            strokeDasharray="5 5"
            activeDot={{ r: 5 }}
            legendType="circle"
            strokeOpacity={stateOpacity.Refunds}
          />
          <Bar
            dataKey="Earning"
            fill="#8162c1"
            legendType="circle"
            fillOpacity={stateOpacity.Earning}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
