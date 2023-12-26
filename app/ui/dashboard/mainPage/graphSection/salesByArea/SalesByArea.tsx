import { SALESBYLOCATION } from "@/data/salesByLocations";
import Button from "@/utils/Button";
import CardLayout from "../../boxLayout/cardLayout";
const SalesByArea = () => {
  return (
    <div className="w-full xl:flex-1 box-border">
      <CardLayout className="min-h-[400px]">
        <div className="border-b flex items-center p-5 border-slate-600 justify-between">
          <h2 className="text-[18px]">Sales By Locations</h2>
          <Button
            title="Export Report"
            className="bg-soft w-fit text-text_light text-sm px-5 py-2 hover:bg-mainBg hover:text-slate-100 transition-all duration-300"
          />
        </div>

        {/* ------ counters ------- */}
        <div className="h-full w-full relative ">
          <div className=" mt-32 xl:mt-0 xl:absolute bottom-28 flex flex-col gap-3 w-full px-5">
            {SALESBYLOCATION.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <span>{item.title}</span> <span>{item.percentage}%</span>
                </div>
                <div className="bg-soft h-[5px] w-full rounded-full mt-1">
                  <div
                    className={`progressBar bg-blue-600 h-full  rounded-full mt-1`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardLayout>
    </div>
  );
};

export default SalesByArea;
