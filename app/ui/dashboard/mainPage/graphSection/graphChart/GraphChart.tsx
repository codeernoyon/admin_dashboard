"use client";
import CardLayout from "../../boxLayout/cardLayout";
import Graph from "./Graph";
import GraphDetails from "./GraphDetails";
import GraphTopDetails from "./GraphTopDetails";
const GraphChart = () => {
  return (
    <CardLayout className="lg:w-[65%]">
      <div className="">
        <GraphTopDetails />
        <GraphDetails />
        <Graph />
      </div>
    </CardLayout>
  );
};

export default GraphChart;
