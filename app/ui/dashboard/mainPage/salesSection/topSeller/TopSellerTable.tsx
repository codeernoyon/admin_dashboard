import Image from "next/image";
import { BsBarChartFill } from "react-icons/bs";

const TopSellerTable = ({ data }: any) => {
  return (
    <table className="capitalize w-full ">
      <tbody>
        {data.map((item: any, index: any) => (
          <tr key={index} className="border-t-[1px] border-[#545b5d] ">
            <td className="px-2 flex items-center gap-2 py-2 w-[200px] md:w-fit">
              <Image
                src={item?.image}
                alt="image"
                height={40}
                width={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span>{item?.name}</span>
                <span className="text-sm text-slate-500">{item.owner}</span>
              </div>
            </td>
            <td>
              <div className="">
                <span className="text-sm text-slate-500">{item?.type}</span>
              </div>
            </td>

            <td>
              <div className="flex flex-col w-[80px] md:w-fit">
                <span>
                  {item.stock === 0 ? (
                    <span className="bg-red-800 bg-opacity-30 p-1 text-red-500 rounded-md text-[10px]">
                      Out of stock
                    </span>
                  ) : (
                    item?.stock
                  )}
                </span>
                <span className="text-sm text-slate-500">Stock</span>
              </div>
            </td>
            <td>
              <div className="flex flex-col w-[120px] md:w-fit">
                <span className="text-sm text-slate-500">${item?.amount}</span>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1 w-[120px] md:w-fit">
                <span className="">{item?.percentage}%</span>
                <BsBarChartFill className="text-green-500" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopSellerTable;
