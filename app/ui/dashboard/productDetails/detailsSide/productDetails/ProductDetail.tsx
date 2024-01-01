import AboutProduct from "./AboutProduct";
import Description from "./Description";
import ProductAmountDetails from "./ProductAmountDetails";
import ProductVariation from "./ProductVariation";
import RatingReviews from "./Ratings&Reviews/RatingReviews";
import ProductDescription from "./productDescription/ProductDescription";

const ProductDetail = ({ data }: any) => {
  return (
    <div>
      <AboutProduct product={data} />
      <ProductAmountDetails product={data} />
      <ProductVariation />
      <Description />
      <ProductDescription />
      <RatingReviews />
    </div>
  );
};

export default ProductDetail;
