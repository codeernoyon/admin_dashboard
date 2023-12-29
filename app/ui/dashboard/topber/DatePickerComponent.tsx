import { FaCalendarAlt } from "react-icons/fa";
import PickDate from "./PickDate";

const DatePickerComponent = () => {
  return (
    <div className="relative border border-slate-500 rounded-md flex items-center justify-between cursor-pointer ">
      <div className="px-5">
        <span className="text-sm">05 Sep, 2023 to 06 Oct, 2023</span>
      </div>
      <div className="bg-mainBg px-10 md:px-6 py-3 flex justify-center items-center">
        <FaCalendarAlt />
      </div>
      <PickDate />
    </div>
  );
};

export default DatePickerComponent;
