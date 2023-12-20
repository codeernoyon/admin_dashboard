import { AiOutlineDollar } from "react-icons/ai";
import { FaRegUserCircle, FaWallet } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";

export const CARDS = [
  {
    id: 1,
    title: "TOTAL EARNINGS",
    amount: "$559.25k",
    percentage: "+16.24",
    icon: <AiOutlineDollar />,
    linkTitle: "View net earnings",
    link: "/",
  },
  {
    id: 2,
    title: "ORDERS",
    amount: "36,894",
    percentage: "-3.57",
    icon: <RiShoppingBagLine />,
    linkTitle: "View all orders",
    link: "/",
  },
  {
    id: 3,
    title: "CUSTOMERS",
    amount: "183.35M",
    percentage: "+29.08",
    icon: <FaRegUserCircle />,
    linkTitle: "See details",
    link: "/",
  },
  {
    id: 4,
    title: "MY BALANCE",
    amount: "$165.89k",
    percentage: "0.00",
    icon: <FaWallet />,
    linkTitle: "Withdraw money",
    link: "/",
  },
];
