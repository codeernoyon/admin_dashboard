import { REVIEWS } from "@/data/Ratings&Reviews";
import { IoMdStar } from "react-icons/io";

const Reviews = () => {
  return (
    <div>
      <div>
        <span className="font-semibold text-slate-400">Reviews</span>
      </div>
      <div className=" max-h-[200px] overflow-hidden overflow-y-scroll mt-3">
        <div className="flex flex-col">
          {REVIEWS?.map((item, index) => (
            <div
              key={"idhf" + index}
              className="py-4 border-dashed border border-slate-700 px-5 my-3 rounded-md"
            >
              {/* review & rating */}
              <div className="flex gap-5">
                <span className="w-[60px] h-5 bg-green-500 rounded-full flex items-center justify-center gap-2 text-sm mt-2 px-2">
                  <IoMdStar />
                  {item.rating}.0
                </span>
                <p className="text-slate-400">{item.review}</p>
              </div>
              {/* name */}
              <h5 className=" text-slate-500 text-right mt-2">
                -by Henry Baird
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
