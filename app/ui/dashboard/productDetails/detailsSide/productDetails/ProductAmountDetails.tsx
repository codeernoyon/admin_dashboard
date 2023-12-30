import { AiFillDollarCircle, AiFillSwitcher } from "react-icons/ai";
import { FaLayerGroup } from "react-icons/fa6";

const ProductAmountDetails = ({ product }: any) => {
  const { price, stock, amount } = product[0];
  const mappingData = [
    {
      title: "Price : ",
      amount: `$${price}`,
      icon: <AiFillDollarCircle className="text-mainBg" size={23} />,
    },
    {
      title: "No. of Orders : ",
      amount: 2234,
      icon: <AiFillSwitcher className="text-mainBg" size={25} />,
    },
    {
      title: "Available Stocks : ",
      amount: stock,
      icon: <FaLayerGroup className="text-mainBg" size={25} />,
    },
    {
      title: "Total Revenue : ",
      amount: `$${amount}`,
      icon: <AiFillDollarCircle className="text-mainBg" size={25} />,
    },
  ];
  return (
    <div className="mt-6 flex items-center flex-wrap gap-2 w-full">
      {mappingData?.map((item, index) => (
        <div
          key={index + "skj"}
          className="flex items-center gap-2 py-5 border-dashed border border-slate-600  px-5 w-[48%]"
        >
          {/* icon */}
          {item.icon}

          {/* details */}
          <div className="xl:flex items-center gap-3">
            <span className="text-slate-400 text-sm">{item.title}</span>
            <span className="text-xl">{item.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductAmountDetails;
