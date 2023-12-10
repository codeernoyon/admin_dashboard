import NavigationLinks from "./navigationLinks";
import User from "./user";

const Sidebar = () => {
  return (
    <div className="fixed bg-soft  p-5 h-full w-[25%]">
      <User />
      <NavigationLinks />
    </div>
  );
};

export default Sidebar;
