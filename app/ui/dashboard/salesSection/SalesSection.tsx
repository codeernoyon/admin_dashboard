import SellingProducts from "./SellingProducts";
import TopSeller from "./TopSeller";

const SalesSection = () => {
  return (
    <div className="mt-10 flex gap-5 flex-col xl:flex-row">
      <SellingProducts />
      <TopSeller />
    </div>
  );
};

export default SalesSection;
