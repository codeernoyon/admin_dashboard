import Image from "next/image";
import { useRouter } from "next/navigation";

const SellingProductTable = ({ data }: any) => {
  const router = useRouter();

  const handleRouting = (data: any) => {
    router.push(`dashboard/productDetails/${data?.id}`);
  };
  return (
    <table className="capitalize w-full ">
      <tbody>
        {data.map(
          (
            item: {
              id: number;
              image: string;
              name: string;
              date: string;
              price: number;
              order: number;
              stock: number;
              amount: number;
            },
            index: number
          ) => (
            <tr
              key={index * Math.random()}
              className="border-t-[1px] border-[#545b5d]"
            >
              <td
                className="py-[5px] flex items-center gap-2 w-[200px] md:fit cursor-pointer"
                onClick={() => handleRouting(item)}
              >
                <Image
                  src={item?.image}
                  alt="image"
                  height={50}
                  width={50}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span>{item?.name}</span>
                  <span className="text-sm text-slate-500">{item.date}</span>
                </div>
              </td>
              <td>
                <div className="flex flex-col w-[70px] md:w-fit">
                  <span>${item?.price}</span>
                  <span className="text-sm text-slate-500">Price</span>
                </div>
              </td>
              <td>
                <div className="flex flex-col  w-[60px] md:w-fit">
                  <span>{item?.order}</span>
                  <span className="text-sm text-slate-500">Order</span>
                </div>
              </td>
              <td>
                <div className="flex flex-col  w-[80px] md:w-fit">
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
                <div className="flex flex-col w-[100px] md:w-fit">
                  <span>${item?.amount}</span>
                  <span className="text-sm text-slate-500">Amount</span>
                </div>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default SellingProductTable;
