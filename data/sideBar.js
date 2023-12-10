import { CiBadgeDollar } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { MdDashboard, MdOutlineCardTravel, MdSettings } from "react-icons/md";
import { PiUsersFourFill } from "react-icons/pi";
import { TbHelpSquareFilled, TbReportSearch } from "react-icons/tb";

export const SIDEBAR = [
  {
    id: 1,
    title: "pages",
    items: [
      {
        id: 1,
        title: "dashboard",
        icon: <MdDashboard size={20} />,
      },
      { id: 2, title: "users", icon: <FaRegUser size={20} /> },
      { id: 3, title: "transactions", icon: <CiBadgeDollar size={23} /> },
    ],
  },
  {
    id: 2,
    title: "analytics",
    items: [
      { id: 1, title: "revenue", icon: <MdOutlineCardTravel size={20} /> },
      { id: 2, title: "reports", icon: <TbReportSearch size={20} /> },
      { id: 3, title: "teams", icon: <PiUsersFourFill size={20} /> },
    ],
  },
  {
    id: 3,
    title: "user",
    items: [
      { id: 1, title: "setting", icon: <MdSettings size={20} /> },
      { id: 2, title: "help", icon: <TbHelpSquareFilled size={20} /> },
    ],
  },
];
