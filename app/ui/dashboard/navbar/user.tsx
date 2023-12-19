import Image from "next/image";

const User = () => {
  return (
    <div className="relative flex gap-5 items-center">
      {/* image */}
      <Image
        src="/avatars/3.png"
        alt="image"
        width={40}
        height={40}
        className="rounded-full"
      />
      {/* name */}
      <div className="flex flex-col">
        <span className="text-[16px] capitalize">noyon islam</span>
        <span className="text-[12px] text-slate-400 capitalize">
          administrator
        </span>
      </div>
    </div>
  );
};

export default User;
