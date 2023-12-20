import Cards from "../ui/dashboard/cards/Cards";
import TopBer from "../ui/dashboard/topber/TopBer";

const Dashboard = () => {
  return (
    <div className=" px-5 h-full pt-[120px] md:pt-[100px]">
      <TopBer />
      <Cards />
    </div>
  );
};

export default Dashboard;
