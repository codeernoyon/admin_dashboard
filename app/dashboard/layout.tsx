import Footer from "../ui/dashboard/footer/footer";
import NavBar from "../ui/dashboard/navbar/navBar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="min-h-screen min-w-screen flex gap-2">
      <div className="rounded-t-[10px] w-[25%]">
        <Sidebar />
      </div>
      <div className="flex-1 flex-col">
        <NavBar />
        <div className="flex-1 ">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
