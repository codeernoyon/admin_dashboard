import { GoArrowLeft, GoArrowRight } from "react-icons/go";
const Pagination = ({
  number,
  nextPageRange,
  prvPagination,
  nextPagination,
  pagesNumber,
  setNumber,
}: any) => {
  return (
    <div className="flex justify-between  flex-col md:flex-row gap-5 px-3 border-t-[1px] border-[#545b5d] py-5">
      <div>
        <span>
          Showing {number} of {nextPageRange} Results
        </span>
      </div>
      {/* pagination icon */}
      <div className="flex gap-2">
        {/* prv */}
        <div onClick={() => prvPagination()}>
          <GoArrowLeft
            className={`h-9 w-7 p-1 rounded-md cursor-pointer border border-slate-600 hover:bg-mainBg hover:text-slate-200 transition-all duration-300`}
          />
        </div>
        {/* between numbers */}
        <div className="flex gap-2">
          {pagesNumber.map((index: number) => (
            <span
              key={index * Math.random()}
              className={`h-9 w-7 rounded-md cursor-pointer border border-slate-600 flex justify-center items-center hover:bg-mainBg hover:text-slate-200 transition-all duration-300 ${
                index === number && "bg-mainBg text-slate-200"
              }`}
              onClick={() => setNumber(index)}
            >
              {index}
            </span>
          ))}
        </div>
        {/* next */}
        <div onClick={() => nextPagination()}>
          <GoArrowRight
            className={`h-9 w-7 p-1 rounded-md cursor-pointer border border-slate-600 hover:bg-mainBg hover:text-slate-200 transition-all duration-300`}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
