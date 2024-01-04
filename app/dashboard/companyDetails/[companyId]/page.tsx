import CompanyDetail from "@/app/ui/dashboard/companyDetails/CompanyDetail";
import CompanyInfo from "@/app/ui/dashboard/companyDetails/CompanyInfo";
import CardLayout from "@/app/ui/dashboard/mainPage/boxLayout/cardLayout";
import { TOPSELLER } from "@/data/topSeller";
const CompanyDetails = ({ params }: any) => {
  const product: any = TOPSELLER.filter(
    (item) => item.id === parseInt(params.companyId)
  );

  return (
    <div className="pt-[80px] w-full h-full">
      {/* heading */}
      <div className="w-full border-y border-slate-600 py-2 px-5 capitalize font-semibold">
        <h2>product details</h2>
      </div>
      <div className="h-full w-full p-5 flex gap-5 flex-col xl:flex-row">
        <div className="xl:max-w-[330px]">
          <CardLayout>
            <CompanyInfo data={product} />
          </CardLayout>
        </div>
        <div className="flex-1 ">
          <CompanyDetail />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
