import AboutProduct from "./AboutProduct";
import Description from "./Description";
import ProductAmountDetails from "./ProductAmountDetails";
import ProductVariation from "./ProductVariation";
import ProductDescription from "./productDescription/ProductDescription";

const ProductDetail = ({ data }: any) => {
  return (
    <div>
      <AboutProduct product={data} />
      <ProductAmountDetails product={data} />
      <ProductVariation />
      <Description />
      <ProductDescription />
    </div>
  );
};

export default ProductDetail;
