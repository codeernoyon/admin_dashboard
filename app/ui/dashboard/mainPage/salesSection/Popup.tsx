import { Key } from "react";

const Popup = ({ data, setStore, setShowPopup, showPopup, className }: any) => {
  return (
    <div
      className={`absolute top-11 border border-mainBg border-opacity-50 bg-main_clr  py-3 rounded-md z-[999] ${className} ${
        showPopup ? "block" : "hidden"
      }`}
    >
      <ul className="w-full">
        {data?.map(
          (
            item: {
              title: string;
            },
            index: Key | null | undefined
          ) => (
            <li
              key={index}
              className="hover:bg-slate-800 cursor-pointer py-1 px-5 text-sm text-slate-400"
              onClick={() => {
                setShowPopup(!showPopup);
                setStore(item?.title);
              }}
            >
              {item.title}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Popup;
