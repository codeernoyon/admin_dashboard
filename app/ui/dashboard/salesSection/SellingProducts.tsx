"use client";
import { BESTSELLINGPRODUCTS } from "@/data/sellingProducts";
import { useState } from "react";
import CardLayout from "../cardLayout/cardLayout";
import Pagination from "./Pagination";
import SellingProductTable from "./SellingProductTable";

const SellingProducts = () => {
  const [number, setNumber] = useState(1);
  const rangePagination = 6;
  const lastIndex = number * rangePagination;
  const firstIndex = lastIndex - rangePagination;
  const data = BESTSELLINGPRODUCTS.slice(firstIndex, lastIndex);
  const nextPageRange = Math.ceil(BESTSELLINGPRODUCTS.length / rangePagination);
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
    <div className="w-full xl:w-[50%] ">
      <CardLayout className=" ">
        <div className=" text-slate-300 ">
          <div className="flex justify-between items-center px-5 py-5">
            <span className="capitalize font-semibold text-[17px]">
              Best Selling Products
            </span>
            <div>
              <span className="uppercase">Sort By:</span>
            </div>
          </div>
          {/* table */}
          <div className="overflow-x-scroll">
            <SellingProductTable data={data} />
          </div>
          {/* pagination */}
          <div className="w-full">
            <Pagination
              number={number}
              nextPageRange={nextPageRange}
              prvPagination={prvPagination}
              nextPagination={nextPagination}
              pagesNumber={pagesNumber}
              setNumber={setNumber}
            />
          </div>
        </div>
      </CardLayout>
    </div>
  );
};

export default SellingProducts;
