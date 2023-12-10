import { NAVBAR } from "@/data/navBar";
const NavBar = () => {
  return (
    <div className="bg-soft py-5 px-5 mt-5 pr-20 flex justify-between items-center">
      <div>
        <span>Dashboard</span>
      </div>
      {/* icons */}
      <ul className="flex gap-8 cursor-pointer">
        {NAVBAR?.map((item, index) => (
          <li key={index}>{item.icon}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
