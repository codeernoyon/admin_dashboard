"use client";
import { CLIENTS } from "@/data/users";
import Image from "next/image";
import { useState } from "react";
const Clients = () => {
  const [number, setNumber] = useState(1);
  const rangePagination = 4;
  const lastIndex = number * rangePagination;
  const firstIndex = lastIndex - rangePagination;
  const data = CLIENTS.slice(firstIndex, lastIndex);
  const nextPageRange = Math.ceil(CLIENTS.length / rangePagination);

  // next pagination
  const nextPagination = () => {
    if (number !== nextPageRange) {
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
    <div className="pb-5">
      <div className="flex justify-between items-center pr-5 py-3">
        <span className="capitalize">clients</span>
        <div className="bg-emerald-600 px-3 py-2 rounded-xl cursor-pointer">
          <span>Add User</span>
        </div>
      </div>
      {/* table */}
      <table className="capitalize w-full mt-5 ">
        <thead>
          <th className="text-start ">name</th>
          <th className="text-start ">email</th>
          <th className="text-start ">role</th>
          <th className="text-center ">status</th>
          <th className="text-start">action</th>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t-[1px] border-[#3f4446]">
              <td className="py-1 flex items-center gap-2">
                <Image
                  src={item?.image}
                  alt="image"
                  height={50}
                  width={50}
                  className="rounded-full"
                />
                <span>{item?.name}</span>
              </td>
              <td>{item?.email}</td>
              <td>{item?.role}</td>
              <td className="text-center">
                {item?.status ? "active" : "deactivate"}{" "}
              </td>
              <td className="">
                <span className="bg-green-700 p-1 px-2 rounded-md cursor-pointer">
                  view
                </span>
                <span className="bg-red-700 p-1 px-2 ml-2  rounded-md cursor-pointer">
                  delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* pagination */}
      <div className="flex justify-between mt-5 px-3">
        <div
          className={`${
            number !== 1 ? "bg-emerald-600" : "bg-slate-400 pointer-events-none"
          } px-8 py-2 rounded-md cursor-pointer`}
          onClick={prvPagination}
        >
          <span>Previous</span>
        </div>
        <div
          className={`${
            number === nextPageRange
              ? "bg-slate-400 pointer-events-none"
              : "bg-emerald-600"
          } bg-emerald-600 px-8 py-2 rounded-md cursor-pointer`}
          onClick={nextPagination}
        >
          <span>Next</span>
        </div>
      </div>
    </div>
  );
};

export default Clients;
