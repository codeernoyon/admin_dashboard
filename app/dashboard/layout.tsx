import Footer from "../ui/dashboard/footer/footer";
import NavBar from "../ui/dashboard/navbar/navBar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="min-h-screen w-screen flex">
      <div className="hidden xl:block w-[18%]">
        <Sidebar />
      </div>
      <div className="relative flex-1 overflow-x-hidden text-slate-100">
        <NavBar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
