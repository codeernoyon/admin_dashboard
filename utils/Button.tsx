"use client";
const Button = ({ title, icon, className, onClick }: any) => {
  return (
    <button
      type="button"
      className={`rounded-md cursor-pointer min-w-5 capitalize  ${className}`}
      onClick={() => onClick}
    >
      <span className="flex items-center gap-2">
        {icon && icon}
        {title}
      </span>
    </button>
  );
};

export default Button;
