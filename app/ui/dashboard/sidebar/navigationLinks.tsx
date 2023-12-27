"use client";
import { useStateProvider } from "@/context/StateContext";
import { reducerCase } from "@/context/constants";
import { SIDEBAR } from "@/data/sideBar";
import { usePathname, useRouter } from "next/navigation";
const NavigationLinks = () => {
  const [{}, dispatch] = useStateProvider();

  const path = usePathname();
  const navigation = useRouter();
  const handleNavigation = (pathName: any) => {
    dispatch({
      type: reducerCase.SHOW_SIDE_BER,
      showSideBer: false,
    });
    if (pathName === "dashboard") {
      navigation.push("/dashboard");
    } else {
      navigation.push(`/dashboard/${pathName}`);
    }
  };
  return (
    <div className="mt-5">
      <ul>
        {SIDEBAR.map((item, index) => (
          <li key={index} className="text-sm text-slate-400">
            <span>{item.title}</span>
            <ul className="text-[16px] capitalize mt-3">
              {item?.items.map((link, index) => (
                <li
                  key={index}
                  className={`px-3 py-3 rounded-md hover:bg-soft cursor-pointer transition-all duration-300 my-2 flex items-center gap-2 ${
                    path.slice(path.lastIndexOf("/") + 1) === link?.title
                      ? "text-slate-200 bg-soft"
                      : "text-slate-400 bg-transparent"
                  }`}
                  onClick={() => handleNavigation(link.title)}
                >
                  {link.icon}
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationLinks;
