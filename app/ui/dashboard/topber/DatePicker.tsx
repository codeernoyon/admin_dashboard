import { FaCalendarAlt } from "react-icons/fa";

const DatePicker = () => {
  return (
    <div className="border border-slate-500 rounded-md flex items-center cursor-pointer">
      <div className="px-5">
        <span className="text-sm">05 Sep, 2023 to 06 Oct, 2023</span>
      </div>
      <div className="bg-mainBg h-full w-14 flex justify-center items-center">
        <FaCalendarAlt />
      </div>
    </div>
  );
};

export default DatePicker;
