const ProductVariation = () => {
  const sizes = [
    {
      size: "S",
    },
    {
      size: "M",
    },
    {
      size: "L",
    },
    {
      size: "XL",
    },
  ];

  const colors = [
    {
      color: "#634d99",
    },
    {
      color: "#4788ff",
    },
    {
      color: "#40bb82",
    },
    {
      color: "#3fa7d6",
    },
    {
      color: "#ffca5b",
    },
    {
      color: "#ee6352",
    },
  ];
  return (
    <div className="my-5 flex justify-between gap-4 flex-col xl:flex-row">
      {/* sizes */}
      <div>
        <div>
          <span className="text-slate-200">Size :</span>
        </div>
        <div className="flex items-center gap-3 mt-2">
          {sizes.map((item, index) => (
            <p
              key={index * 36}
              className="h-7 w-7 flex items-center justify-center bg-mainBg bg-opacity-20 rounded-full text-sm text-mainBg cursor-pointer hover:bg-opacity-100 hover:text-slate-300 transition-all duration-300"
            >
              {item.size}
            </p>
          ))}
        </div>
      </div>
      {/* colors */}
      <div>
        <div>
          <span className="text-slate-200">Colors :</span>
        </div>
        <div className="flex items-center gap-3 mt-2">
          {colors.map((item, index) => (
            <div
              key={index * 36}
              className="h-7 w-7 flex items-center justify-center border border-slate-700 rounded-full"
            >
              <div
                className={`h-5 w-5  rounded-full`}
                style={{ backgroundColor: item?.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductVariation;
