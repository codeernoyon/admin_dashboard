import Rating from "./Rating";
import Reviews from "./Reviews";

const RatingReviews = () => {
  return (
    <div className="mt-10">
      <div className="font-semibold ">
        <span>Ratings & Reviews</span>
      </div>
      <div className="flex gap-5 mt-3 flex-col xl:flex-row">
        <Rating className="xl:w-[35%] mt-6 " />
        <Reviews />
      </div>
    </div>
  );
};

export default RatingReviews;
