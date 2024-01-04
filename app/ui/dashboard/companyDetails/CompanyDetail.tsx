import { IoMdAdd } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import Input from "../../utils/Input";
import CardLayout from "../mainPage/boxLayout/cardLayout";
import Graph from "../mainPage/graphSection/graphChart/Graph";
import GraphDetails from "../mainPage/graphSection/graphChart/GraphDetails";
import GraphTopDetails from "../mainPage/graphSection/graphChart/GraphTopDetails";
import SellingProducts from "../mainPage/salesSection/sellingProducts/SellingProducts";

const CompanyDetail = () => {
  return (
    <div>
      <CardLayout>
        <GraphTopDetails />
        <GraphDetails />
        <Graph />
      </CardLayout>
      <div className="my-6 flex xl:items-center justify-between flex-col md:flex-row gap-5">
        {/* button */}
        <div className="bg-mainBg cursor-pointer px-5 py-2 xl:w-fit flex items-center gap-2 rounded-[5px] justify-center">
          <IoMdAdd />
          <span>Add New</span>
        </div>
        {/* search */}
        <div className="flex items-center gap-2 border border-mainBg py-2 px-5 rounded-[5px]">
          <IoSearchOutline />
          <Input className="bg-transparent" />
        </div>
      </div>
      <SellingProducts />
    </div>
  );
};

export default CompanyDetail;
