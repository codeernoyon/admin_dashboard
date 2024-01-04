import Image from "next/image";
import { MdMessage } from "react-icons/md";
import Rating from "../productDetails/detailsSide/productDetails/Ratings&Reviews/Rating";
import Reviews from "../productDetails/detailsSide/productDetails/Ratings&Reviews/Reviews";
import CompanyInfoDetails from "./CompanyInfoDetails";

const CompanyInfo = ({ data }: any) => {
  const { image, name } = data[0];

  return (
    <div>
      {/* company logo */}
      <div className="flex flex-col justify-center items-center w-full py-10">
        <Image src={image} alt="photo" height={70} width={70} />
        <span className="mt-3 text-xl font-semibold text-slate-200">
          {name}
        </span>
        <span className="text-slate-400">Since 1987</span>
      </div>
      <CompanyInfoDetails />

      <div className="mt-5 px-5">
        <span className="text-xl font-semibold text-slate-400">
          Customer Review
        </span>
        <div className="mt-4">
          <Rating />
        </div>
        <div className="mt-5">
          <Reviews />
        </div>

        {/* contact */}
        <div className="my-10">
          <textarea
            className=" bg-purple-400 bg-opacity-20 border border-slate-700 w-full h-32 px-5 py-2 rounded-sm focus:border-purple-800 outline-none"
            placeholder="Type Your message..."
          ></textarea>
          {/* button */}
          <div className="flex justify-end mt-3">
            <div className="px-7 py-2 flex items-center gap-3 bg-[#8c68cd] w-fit rounded-[5px] cursor-pointer">
              <MdMessage />
              <span>Send Message</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
