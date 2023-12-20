import { CARDS } from "@/data/dashboard";
import Card from "./Card";
const Cards = () => {
  return (
    <div className="flex items-center justify-between py-8 group">
      {CARDS?.map((item, index) => (
        <div key={index}>
          <Card data={item} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
