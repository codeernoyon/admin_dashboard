"use client";
import { useState } from "react";
import Details from "./Details";
import Features from "./Features";
import Services from "./Services";
import Specification from "./Specification";

const ProductDescription = () => {
  const [filterName, setFilterName] = useState("Specification");
  return (
    <div className="mt-10">
      <div className="flex  gap-5 xl:gap-60  flex-col md:flex-row">
        <Features />
        <Services />
      </div>
      {/* description */}
      <div className="mt-5">
        <div className="py-5">
          <span className="font-semibold">Product Description :</span>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <span
              className={`relative w-fit cursor-pointer transition-all duration-300  ${
                filterName === "Specification" &&
                "text-green-400 after:absolute after:top-[30px] after:left-0 after:h-[2px] after:w-[102%] after:bg-green-500"
              }`}
              onClick={() => setFilterName("Specification")}
            >
              Specification
            </span>
            <span
              className={`relative w-fit cursor-pointer  transition-all duration-300  ${
                filterName === "Details" &&
                "text-green-400 after:absolute after:top-[30px] after:left-0 after:h-[2px] after:w-[102%] after:bg-green-500"
              }`}
              onClick={() => setFilterName("Details")}
            >
              Details
            </span>
          </div>
          {/* box */}
          <div className="w-full min-h-[200px] border border-slate-600 mt-2 px-5 py-3 pb-5">
            {filterName === "Specification" ? <Specification /> : <Details />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
