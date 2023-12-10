import { FcGoogle } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { righteous } from "../../utils/font";
const Login = () => {
  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <section>
        <div className="border-[2px] border-main_clr px-5 py-10 rounded-xl flex justify-center items-center flex-col">
          <MdDashboard size={80} color="#81B622" />
          <h2 className={`text-[35px] font-bold ${righteous.className}`}>
            Dashboard Login
          </h2>
          <div className="flex justify-center items-center gap-2 px-20 py-2 border border-main_clr rounded-md cursor-pointer mt-10">
            <FcGoogle size={30} />
            <span>Login With Google</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
