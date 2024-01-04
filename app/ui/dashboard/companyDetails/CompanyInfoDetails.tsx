import Link from "next/link";

const CompanyInfoDetails = () => {
  const companyData = [
    {
      name: "David Marshall",
      title: "Owner Name",
    },
    {
      name: "Partnership",
      title: "Company Type",
    },
    {
      name: "forcemedicines@gamil.com",
      title: "Email",
    },
    {
      name: "www.forcemedicines.com",
      title: "Website",
      link: true,
    },
    {
      name: "+(123) 9876 654 321",
      title: "Contact No.",
    },
    {
      name: "+1 999 876 5432",
      title: "Fax",
    },
    {
      name: "United Kingdom",
      title: "Location",
    },
  ];
  return (
    <div className="border-b border-slate-500">
      <div className="px-6">
        <ul className="overflow-x-scroll">
          {companyData?.map((item, index) => (
            <li className="my-5" key={index + "fdjff"}>
              <div className=" flex gap-2">
                <h5 className="min-w-[150px] ">{item.title}</h5>
                {item.link ? (
                  <Link
                    href={item.name}
                    className="text-blue-500 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <h5 className="min-w-[200px] text-slate-300">{item.name}</h5>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyInfoDetails;
