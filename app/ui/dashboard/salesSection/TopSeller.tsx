"use client";
import { TOPSELLER } from "@/data/topSeller";
import { useState } from "react";
import CardLayout from "../cardLayout/cardLayout";
import Pagination from "./Pagination";
import TopSellerTable from "./TopSellerTable";
const TopSeller = () => {
  const [number, setNumber] = useState(1);
  const rangePagination = 6;
  const lastIndex = number * rangePagination;
  const firstIndex = lastIndex - rangePagination;
  const data = TOPSELLER.slice(firstIndex, lastIndex);
  const nextPageRange = Math.ceil(TOPSELLER.length / rangePagination);
  let pagesNumber = [];
  for (let i = 1; i <= nextPageRange; i++) {
    pagesNumber.push(i);
  }

  // next pagination
  const nextPagination = () => {
    if (number !== nextPageRange) {
      console.log("hi");

      setNumber(number + 1);
    }
  };
  // prv pagination
  const prvPagination = () => {
    if (number !== 1) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="w-[100%] xl:w-[50%]">
      <CardLayout>
        <div className=" text-slate-300">
          <div className="flex justify-between items-center px-5 py-5">
            <span className="capitalize font-semibold text-[17px]">
              Top Sellers
            </span>
            <div>
              <span className="uppercase">Sort By:</span>
            </div>
          </div>
          {/* table */}
          <div className="overflow-x-scroll">
            <TopSellerTable data={data} />
          </div>

          {/* pagination */}
          <Pagination
            number={number}
            nextPageRange={nextPageRange}
            prvPagination={prvPagination}
            nextPagination={nextPagination}
            pagesNumber={pagesNumber}
            setNumber={setNumber}
          />
        </div>
      </CardLayout>
    </div>
  );
};

export default TopSeller;
