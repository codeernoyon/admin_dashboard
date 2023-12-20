import NavigationLinks from "./navigationLinks";

const Sidebar = () => {
  return (
    <div className=" fixed w-[18%] border-r-[1px] border-r-slate-600 p-5 h-full">
      <div>
        <h2 className="text-2xl capitalize font-bold">dashZoon</h2>
      </div>
      <NavigationLinks />
    </div>
  );
};

export default Sidebar;
