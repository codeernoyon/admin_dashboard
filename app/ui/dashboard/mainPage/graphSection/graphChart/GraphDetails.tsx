import { GRAPHDETAILS } from "@/data/graph";

const GraphDetails = () => {
  return (
    <div className="flex my-3 flex-wrap">
      {GRAPHDETAILS?.map((item, index) => (
        <div
          key={index * Math.random()}
          className={`flex flex-col w-[50%] xl:w-[25%] flex-warp justify-center items-center py-3 border-dashed border-t-[1px] border-b-[1px] border-r-[1px] border-slate-600 ${
            GRAPHDETAILS.length === index + 1 && "border-r-0"
          }`}
        >
          <span
            className={`text-[20px] font-semibold  ${
              item?.amount.slice(
                item.amount.indexOf("%"),
                item.amount.indexOf("%") + 1
              ) === "%" && "text-green-500"
            }`}
          >
            {item.amount}
          </span>
          <span className={`text-slate-500`}>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default GraphDetails;
