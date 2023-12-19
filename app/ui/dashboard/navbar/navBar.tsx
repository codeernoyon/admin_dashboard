"use client";
import { NAVBAR } from "@/data/navBar";
import { usePathname } from "next/navigation";
import User from "./user";

const NavBar = () => {
  const path = usePathname();
  return (
    <div className="fixed w-[82%] top-0 z-[90] py-5 px-5  border-b-[1px] border-slate-600 bg-main_clr">
      <div className="flex justify-between items-center ">
        <div>
          <span className="uppercase">
            {path === "/dashboard"
              ? "dashboard"
              : path.slice(path.indexOf("/") + 1, path.lastIndexOf("/")) +
                " / " +
                path.slice(path.lastIndexOf("/") + 1)}
          </span>
        </div>
        {/* icons */}
        <ul className="flex gap-8 cursor-pointer justify-center items-center">
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
