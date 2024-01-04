"use client";
import { DATA, storeBy } from "@/data/StoreVisits";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import CardLayout from "../../boxLayout/cardLayout";
import Popup from "../Popup";
// custom tooltip for hover cell
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];
    return (
      <div
        className={` border border-[#606676] rounded-md`}
        style={{ backgroundColor: payload[0].payload.color }}
      >
        <div className="flex flex-col gap-1 py-1">
          <div className="px-3 flex items-center gap-2 text-sm text-slate-100 capitalize">
            <p>
              {name} : {value}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
const RADIAN = Math.PI / 185;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-sm"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// main component
const StoreVisitsBySource = () => {
  const [store, setStore] = useState("Report");
  const [showPopup, setShowPopup] = useState(false);
  const [stateOpacity, setOpacity] = useState({
    direct: 1,
    Order: 1,
    Refunds: 1,
    zero: 0,
  });
  const handleMouseEnter = (o: any) => {
    const { value } = o;
    if (value === "direct") {
      setOpacity({ ...stateOpacity, direct: 1, Order: 0.1, Refunds: 0.1 });
    }
    if (value === "Order") {
      setOpacity({ ...stateOpacity, direct: 0.1, Order: 1, Refunds: 0.1 });
    }
    if (value === "Refunds") {
      setOpacity({ ...stateOpacity, direct: 0.1, Order: 0.1, Refunds: 1 });
    }
  };

  const handleMouseLeave = (o: any) => {
    setOpacity({ ...stateOpacity, direct: 1, Order: 1, Refunds: 1 });
  };
  return (
    <div className="min-h-[400px] w-[100%] xl:w-[35%]">
      <CardLayout>
        <div className=" text-slate-300">
          <div className="flex justify-between items-center px-5 py-5 border-b border-slate-600">
            <span className="capitalize font-semibold text-[17px]">
              Store Visits by Source
            </span>
            <div className="text-slate-500 relative">
              <span
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowPopup(!showPopup)}
              >
                {store} <FaAngleDown />
              </span>
              <Popup
                className="w-[160px] right-0"
                data={storeBy}
                setStore={setStore}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
              />
            </div>
          </div>
          {/* chart */}
          <div className="h-[400px] flex justify-center items-center ">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart width={400} height={300}>
                <Pie
                  data={DATA}
                  innerRadius={80}
                  outerRadius={120}
                  legendType="circle"
                  cx="50%"
                  cy="50%"
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="order"
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {DATA.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      strokeWidth={0}
                      fill={entry.color}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                {/* <Legend
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                /> */}
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardLayout>
    </div>
  );
};

export default StoreVisitsBySource;
