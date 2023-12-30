import Features from "./Features";
import Services from "./Services";

const ProductDescription = () => {
  return (
    <div className="mt-10">
      <div className="flex  gap-5 xl:gap-60  flex-col md:flex-row">
        <Features />
        <Services />
      </div>
      {/* description */}
      <div className="mt-5">
        <div className="py-5">
          <span className="font-semibold">Product Description :</span>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <span className="relative w-fit text-green-500 after:absolute after:top-[30px] after:left-0 after:h-[2px] after:w-[102%] after:bg-green-500">
              Specification
            </span>
            <span>Details</span>
          </div>
          {/* box */}
          <div className="w-full min-h-[300px] border border-slate-500 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
