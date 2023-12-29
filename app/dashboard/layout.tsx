"use client";
import { StateProvider } from "@/context/StateContext";
import { initialState, reducer } from "@/context/StateReducers";
import Footer from "../ui/dashboard/footer/footer";
import NavBar from "../ui/dashboard/navbar/navBar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
const Layout = ({ children }: any) => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="min-h-screen w-screen flex">
        <div className="xl:w-[18%]">
          <Sidebar />
        </div>
        <div className="relative flex-1 overflow-x-hidden text-slate-100">
          <NavBar />
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </StateProvider>
  );
};

export default Layout;
