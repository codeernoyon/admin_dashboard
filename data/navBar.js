import { BiWorld } from "react-icons/bi";
import { MdNotifications, MdOutlineMessage } from "react-icons/md";

export const NAVBAR = [
  {
    id: 1,
    path: "/message",
    icon: <MdOutlineMessage size={23} />,
  },
  {
    id: 2,
    path: "/notification",
    icon: <MdNotifications size={23} />,
  },
  {
    id: 3,
    path: "/dashboard",
    icon: <BiWorld size={23} />,
  },
];
