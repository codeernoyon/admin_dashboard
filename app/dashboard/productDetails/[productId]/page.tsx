import CardLayout from "@/app/ui/dashboard/mainPage/boxLayout/cardLayout";
import ProductImage from "@/app/ui/dashboard/productDetails/detailsSide/ProductImage";
import ProductDetail from "@/app/ui/dashboard/productDetails/detailsSide/productDetails/ProductDetail";
import { BESTSELLINGPRODUCTS } from "@/data/sellingProducts";
const ProductDetails = ({ params }: any) => {
  const product = BESTSELLINGPRODUCTS.filter(
    (item) => item.id === parseInt(params.productId)
  );

  return (
    <div className="pt-[80px] w-full h-full">
      {/* heading */}
      <div className="w-full border-y border-slate-600 py-2 px-5 capitalize font-semibold">
        <h2>product details</h2>
      </div>
      <div className="h-full w-full p-5">
        <CardLayout className="p-5 flex gap-5 flex-col md:flex-row">
          <div className="max-w-[330px]">
            <ProductImage data={product} />
          </div>
          <div className="flex-1 ">
            <ProductDetail data={product} />
          </div>
        </CardLayout>
      </div>
    </div>
  );
};

export default ProductDetails;
