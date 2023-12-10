import { SIDEBAR } from "@/data/sideBar";
const NavigationLinks = () => {
  return (
    <div className="mt-5">
      <ul>
        {SIDEBAR.map((item, index) => (
          <li key={index} className="text-sm text-slate-400">
            <span>{item.title}</span>
            <ul className="text-[17px] text-slate-300 capitalize mt-3">
              {item?.items.map((link, index) => (
                <li
                  key={index}
                  className={`px-3 py-3 rounded-md hover:bg-slate-700 cursor-pointer transition-all duration-300 my-2 flex items-center gap-2`}
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
