import { useStateProvider } from "@/context/StateContext";
import { reducerCase } from "@/context/constants";
import { righteous } from "@/utils/font";
import { IoCloseCircleOutline } from "react-icons/io5";
import NavigationLinks from "./navigationLinks";
const Sidebar = () => {
  const [{ showSideBer }, dispatch] = useStateProvider();
  return (
    <div
      className={`fixed w-[100%] md:w-[50%] xl:w-[18%] border-r-[1px] border-r-slate-600 p-5 h-full bg-main_clr z-[999999] xl:z-0 transition-all duration-300 ${
        showSideBer ? "left-[0%]" : "left-[-100%] xl:left-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <h2 className={`text-2xl capitalize font-bold ${righteous.className}`}>
          dashZoon
        </h2>
        {/* close side ber */}
        <div
          className="text-[40px] text-mainBg xl:hidden cursor-pointer"
          onClick={() => {
            dispatch({
              type: reducerCase.SHOW_SIDE_BER,
              showSideBer: !showSideBer,
            });
          }}
        >
          <IoCloseCircleOutline />
        </div>
      </div>
      <NavigationLinks />
    </div>
  );
};

export default Sidebar;
