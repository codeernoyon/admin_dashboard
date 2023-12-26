import CardLayout from "../boxLayout/cardLayout";

const Card = ({ data }: any) => {
  return (
    <CardLayout className="hover:top-[-10px]  w-full">
      <div className="relative px-3   py-3 ">
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
    </CardLayout>
  );
};

export default Card;
