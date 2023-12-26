"use client";
import { BESTSELLINGPRODUCTS } from "@/data/sellingProducts";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import CardLayout from "../../boxLayout/cardLayout";
import Pagination from "../Pagination";
import Popup from "../Popup";
import SellingProductTable from "./SellingProductTable";

const SellingProducts = () => {
  const [store, setStore] = useState("Today");
  const [showPopup, setShowPopup] = useState(false);
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
  // popup data
  const storeBy = [
    {
      title: "Today",
    },
    {
      title: "Yesterday",
    },
    {
      title: "Last 7 Days",
    },
    {
      title: "Last 30 Days",
    },
    {
      title: "This Month",
    },
    {
      title: "Last Mont",
    },
  ];
  return (
    <div className="w-full xl:w-[50%] ">
      <CardLayout className=" ">
        <div className=" text-slate-300 ">
          <div className="flex flex-col md:flex-row justify-between gap-2 md:items-center px-5 py-5">
            <span className="capitalize font-semibold text-[17px]">
              Best Selling Products
            </span>
            <div className="flex gap-3">
              <span className="uppercase">Sort By:</span>
              <div className="text-slate-500 relative">
                <span
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setShowPopup(!showPopup)}
                >
                  {store} <FaAngleDown />
                </span>
                <Popup
                  className="w-[150px] right-[-40%]"
                  data={storeBy}
                  setStore={setStore}
                  showPopup={showPopup}
                  setShowPopup={setShowPopup}
                />
              </div>
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
