import { RECENTORDER } from "@/data/recentOrder";
import Image from "next/image";

const RecentOrderTable = () => {
  return (
    <table className="capitalize w-full ">
      <thead className=" bg-cyan-950 bg-opacity-50 font-normal text-slate-500 text-left">
        <tr>
          <th className="pl-5 py-3">orderId</th>
          <th>customer</th>
          <th>product</th>
          <th>amount</th>
          <th className="px-3">status</th>
          <th>vendor</th>
        </tr>
      </thead>
      <tbody className="text-slate-300">
        {RECENTORDER.map((item, index) => (
          <tr
            key={index}
            className={`border-t-[1px] border-[#545b5d] text-sm ${
              RECENTORDER.length === index + 1 && "border-b"
            }`}
          >
            <td className="px-5 text-mainBg">
              <span>
                #{item.orderId}
                {index}
              </span>
            </td>
            <td className="py-[10px] flex items-center gap-2 w-[150px] md:w-fit">
              <Image
                src={item?.image}
                alt="image"
                height={40}
                width={40}
                className="rounded-full"
              />
              <span>{item?.customer}</span>
            </td>
            <td>
              <div className="w-[150px] md:w-fit">
                <span>{item?.product}</span>
              </div>
            </td>
            <td>
              <div className=" w-[60px] md:w-fit text-center text-green-500">
                <span>${item?.amount}</span>
              </div>
            </td>
            <td className="px-3">
              <div
                className={`w-[80px] md:w-fit bg-slate-800 px-3 rounded-md ${
                  item?.status === "Paid" && " text-green-500"
                } ${item?.status === "Pending" && " text-yellow-500"} ${
                  item?.status === "Unpaid" && " text-red-500"
                }`}
              >
                <span className=" text-center">{item?.status}</span>
              </div>
            </td>
            <td>
              <div className="w-[160px] md:w-fit">
                <span>{item?.vendor}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentOrderTable;
