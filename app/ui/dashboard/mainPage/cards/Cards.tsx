import { CARDS } from "@/data/dashboard";
import Card from "./Card";
const Cards = () => {
  return (
    <div className="flex items-center xl:justify-between py-8 group flex-wrap gap-5 xl:gap-0 w-full">
      {CARDS?.map((item, index) => (
        <div key={index} className="w-[98%] md:w-[48%] xl:w-[24%] ">
          <Card data={item} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
