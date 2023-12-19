import Button from "@/utils/Button";
import { CiCirclePlus } from "react-icons/ci";
import DatePicker from "./DatePicker";

const TopBer = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div>
        <h2 className="text-[18px]">Good Morning, Anna!</h2>
        <span className="text-sm text-slate-400">
          Here&apos;s what&apos;s happening with your store today.
        </span>
      </div>
      <div className="flex gap-4">
        <DatePicker />
        <Button
          title="add product"
          className="bg-soft text-text_light px-5 py-2 hover:bg-mainBg hover:text-slate-100 transition-all duration-300"
          icon={<CiCirclePlus size={18} />}
        />
      </div>
    </div>
  );
};

export default TopBer;
