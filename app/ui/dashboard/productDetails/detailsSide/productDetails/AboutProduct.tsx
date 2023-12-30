import { IoMdStar } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const AboutProduct = ({ product }: any) => {
  const { name, date } = product[0];

  return (
    <div className="text-slate-200 flex justify-between gap-3">
      <div className="">
        {/* name */}
        <h2 className="text-xl font-semibold">{name}</h2>
        {/* author */}
        <div className="flex items-center gap-3 my-2 flex-wrap">
          <span className="text-mainBg">Tommy Hilfiger</span>
          <span>
            <span className="text-slate-400 text-sm">Seller :</span> Zoetic
            Fashion
          </span>
          <span>
            <span className="text-slate-400 text-sm">Published :</span> {date}
          </span>
        </div>
        {/* rating */}
        <div className="flex items-center gap-1">
          {/* starts */}
          <div className="flex items-center text-yellow-400">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </div>
          <span className="text-slate-400 text-sm">
            ( 5.50k Customer Review )
          </span>
        </div>
      </div>
      {/* edit button */}
      <div className="p-3  w-fit h-fit bg-mainBg text-mainBg bg-opacity-20 hover:bg-opacity-100 hover:text-slate-100 transition-all duration-300 rounded-md cursor-pointer ">
        <MdEdit size={25} />
      </div>
    </div>
  );
};

export default AboutProduct;
