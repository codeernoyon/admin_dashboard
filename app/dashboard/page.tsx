import Cards from "../ui/dashboard/cards/Cards";
import GraphChart from "../ui/dashboard/graphChart/GraphChart";
import TopBer from "../ui/dashboard/topber/TopBer";

const Dashboard = () => {
  return (
    <div className=" px-5 h-full pt-[120px] md:pt-[100px]">
      <TopBer />
      <Cards />
      {/* graph charts area */}
      <div>
        <GraphChart />
      </div>
    </div>
  );
};

export default Dashboard;
