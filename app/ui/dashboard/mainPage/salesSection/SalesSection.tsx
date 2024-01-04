import RecentOrders from "./recentOrders/RecentOrders";
import SellingProducts from "./sellingProducts/SellingProducts";
import StoreVisitsBySource from "./storeVisitsbySource/StoreVisitsbySource";
import TopSeller from "./topSeller/TopSeller";

const SalesSection = () => {
  return (
    <div className="mt-10 flex gap-5 flex-col">
      <div className="flex gap-5 flex-col xl:flex-row">
        <SellingProducts className="w-full xl:w-[50%]" />
        <TopSeller />
      </div>
      <div className="flex gap-5 flex-col xl:flex-row">
        <StoreVisitsBySource />
        <RecentOrders />
      </div>
    </div>
  );
};

export default SalesSection;
