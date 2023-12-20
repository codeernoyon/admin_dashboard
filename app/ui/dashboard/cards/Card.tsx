const Card = ({ data }: any) => {
  return (
    <div className="relative w-[350px]  xl:w-[265px] py-3 px-5 border-[1px] border-slate-600 rounded-[3px] before:absolute before:bg-transparent before:h-4 before:w-4 before:top-[-4px] before:right-[-4px] before:border-r-[3px]  before:border-t-[3px] before:border-slate-600 after:absolute  after:bg-transparent after:h-4 after:w-4 after:bottom-[-4px] after:left-[-4px] after:border-l-[3px] after:border-b-[3px] after:border-slate-600 hover:top-[-10px]">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-400">{data.title}</span>
        <span
          className={`${
            data.percentage.slice(0, 1) === "+"
              ? "text-green-500"
              : data.percentage.slice(0, 1) === "-"
              ? "text-red-500"
              : "text-slate-400"
          }`}
        >
          {data.percentage}%
        </span>
      </div>
      {/* amount */}
      <div className="py-1 pt-5">
        <span className={`text-2xl font-[500] text-slate-300 `}>
          {data.amount}
        </span>
      </div>
      {/* ----- ------ */}
      <div className="flex justify-between items-center ">
        <span className="text-sm underline cursor-pointer">
          {data.linkTitle}
        </span>
        <div className="bg-soft p-4 rounded-md text-mainBg text-[20px] bg-opacity-50">
          {data.icon}
        </div>
      </div>
    </div>
  );
};

export default Card;
