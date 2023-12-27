import { TbReportAnalytics } from "react-icons/tb";
import CardLayout from "../../boxLayout/cardLayout";
import RecentOrderTable from "./RecentOrderTable";

const RecentOrders = () => {
  return (
    <div className="w-[100%] xl:w-[65%]">
      <CardLayout>
        <div className=" text-slate-300 ">
          <div className="flex flex-col md:flex-row justify-between gap-2 md:items-center px-5 py-5 border-b border-slate-600">
            <span className="capitalize font-semibold text-[17px]">
              Recent Orders
            </span>
            <div className="py-2 px-5 rounded-md text-teal-500 bg-slate-800 hover:bg-teal-600 hover:text-slate-200 transition-all duration-300 cursor-pointer flex items-center gap-1">
              <TbReportAnalytics />

              <span>Generate Report</span>
            </div>
          </div>
          {/* table */}
          <div className="overflow-x-scroll">
            <RecentOrderTable />
          </div>
        </div>
      </CardLayout>
    </div>
  );
};

export default RecentOrders;
