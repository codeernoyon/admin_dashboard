import Button from "@/utils/Button";
import { CiCirclePlus } from "react-icons/ci";
import DatePicker from "./DatePickerComponent";

const TopBer = () => {
  return (
    <div className="flex xl:items-center gap-3 xl:gap-0 justify-between w-full flex-col xl:flex-row">
      <div>
        <h2 className="text-[18px]">Good Morning, Noyon Islam!</h2>
        <span className="text-sm text-slate-400">
          Here&apos;s what&apos;s happening with your store today.
        </span>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <DatePicker />
        <Button
          title="add product"
          className="bg-soft w-fit text-text_light text-sm px-5 py-2 hover:bg-mainBg hover:text-slate-100 transition-all duration-300"
          icon={<CiCirclePlus size={16} />}
        />
      </div>
    </div>
  );
};

export default TopBer;
