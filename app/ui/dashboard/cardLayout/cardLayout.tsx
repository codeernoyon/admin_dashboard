const CardLayout = ({ children, className }: any) => {
  return (
    <div
      className={`relative border-[1px] border-slate-600 rounded-[3px] before:absolute before:bg-transparent before:h-4 before:w-4 before:top-[-4px] before:right-[-4px] before:border-r-[3px]  before:border-t-[3px] before:border-slate-600 after:absolute  after:bg-transparent after:h-4 after:w-4 after:bottom-[-4px] after:left-[-4px] after:border-l-[3px] after:border-b-[3px] after:border-slate-600 ${className}`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
