import { RATING } from "@/data/Ratings&Reviews";
import { IoMdStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";
const Rating = () => {
  return (
    <div className="xl:w-[35%] mt-6">
      {/* stars */}
      <div>
        {/* stars */}
        <div className="flex justify-between items-center bg-mainBg bg-opacity-20 px-3 py-1">
          <div className="flex items-center text-yellow-400 text-[20px]">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoStarHalfOutline size={17} />
          </div>
          <span className="font-semibold text-sm">4.5 out of 5</span>
        </div>
        <h4 className="text-slate-400 text-sm pt-3">5.50k Customer Review </h4>
      </div>
      {/* ratings */}
      <div className="mt-5">
        {RATING?.map((item, index) => (
          <div
            key={"idjfs" + index}
            className="flex justify-between items-center text-sm my-2"
          >
            <h5 className="w-[25%]">{item.title}</h5>
            <div className="bg-mainBg bg-opacity-10  h-1 rounded-full w-[40%]">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(item.rating / 8200) * 100}%`,
                  backgroundColor: item.color,
                }}
              ></div>
            </div>
            <h5 className="text-center w-[25%]"> {item.rating}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
