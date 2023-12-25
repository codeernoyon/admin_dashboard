import Cards from "../ui/dashboard/cards/Cards";
import GraphChart from "../ui/dashboard/graphChart/GraphChart";
import SalesByArea from "../ui/dashboard/salesByArea/SalesByArea";
import SalesSection from "../ui/dashboard/salesSection/SalesSection";
import TopBer from "../ui/dashboard/topber/TopBer";

const Dashboard = () => {
  return (
    <div className=" px-5 h-full pt-[120px] md:pt-[100px]">
      <TopBer />
      <Cards />
      {/* graph charts area */}
      <div className="flex justify-between flex-col xl:flex-row gap-5">
        <GraphChart />
        <SalesByArea />
      </div>
      {/* sales section */}
      <SalesSection />
    </div>
  );
};

export default Dashboard;
