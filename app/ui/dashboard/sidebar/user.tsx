import Image from "next/image";

const User = () => {
  return (
    <div className="relative flex gap-5 items-center">
      {/* image */}
      <Image
        src="/avatars/3.png"
        alt="image"
        width={60}
        height={60}
        className="rounded-full"
      />
      {/* name */}
      <div className="flex flex-col">
        <span className="text-xl capitalize">noyon islam</span>
        <span className="text-sm text-slate-400 capitalize">administrator</span>
      </div>
    </div>
  );
};

export default User;
