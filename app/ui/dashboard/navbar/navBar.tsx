"use client";
import { useStateProvider } from "@/context/StateContext";
import { reducerCase } from "@/context/constants";
import { NAVBAR } from "@/data/navBar";
import { usePathname } from "next/navigation";
import User from "./user";

const NavBar = () => {
  const path = usePathname();
  const [{ showSideBer }, dispatch] = useStateProvider();
  return (
    <div className="fixed w-[100%] xl:w-[82%] top-0 z-[90] py-5 px-5  border-b-[1px] border-slate-600 bg-main_clr">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-3">
          {/* toggle button */}
          <div
            className="flex flex-col gap-1 cursor-pointer xl:hidden"
            onClick={() => {
              dispatch({
                type: reducerCase.SHOW_SIDE_BER,
                showSideBer: !showSideBer,
              });
            }}
          >
            <div className="h-1 w-6 bg-mainBg rounded-full"></div>
            <div className="h-1 w-9 bg-mainBg rounded-full"></div>
            <div className="h-1 w-7 bg-mainBg rounded-full"></div>
            <div className="h-1 w-10 bg-mainBg rounded-full"></div>
          </div>
          <span className="uppercase">
            {path === "/dashboard"
              ? "dashboard"
              : path.slice(path.indexOf("/") + 1, path.lastIndexOf("/")) +
                " / " +
                path.slice(path.lastIndexOf("/") + 1)}
          </span>
        </div>
        {/* icons */}
        <ul className="flex gap-3 md:gap-8 cursor-pointer justify-center items-center">
          {NAVBAR?.map((item, index) => (
            <li key={index}>{item.icon}</li>
          ))}
          <li>
            <User />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
