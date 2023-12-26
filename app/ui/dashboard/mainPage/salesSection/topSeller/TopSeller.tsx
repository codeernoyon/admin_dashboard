"use client";
import { TOPSELLER } from "@/data/topSeller";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import CardLayout from "../../boxLayout/cardLayout";
import Pagination from "../Pagination";
import Popup from "../Popup";
import TopSellerTable from "./TopSellerTable";

const TopSeller = () => {
  const [store, setStore] = useState("Report");
  const [showPopup, setShowPopup] = useState(false);
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
  // popup data
  const storeBy = [
    {
      title: "Download Report",
    },
    {
      title: "Export",
    },
    {
      title: "Import",
    },
  ];
  return (
    <div className="w-[100%] xl:w-[50%]">
      <CardLayout>
        <div className=" text-slate-300">
          <div className="flex justify-between items-center px-5 py-5">
            <span className="capitalize font-semibold text-[17px]">
              Top Sellers
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
