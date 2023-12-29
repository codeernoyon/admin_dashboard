"use client";
import { useState } from "react";
const PickDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="absolute top-[50px] left-0 bg-main_clr w-full z-[9999]"></div>
  );
};

export default PickDate;
