import { AiOutlineHome } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { SiImessage } from "react-icons/si";
import { AiFillDashboard } from "react-icons/ai";

export const sideIcons = [
    { id: "home", Icon: AiOutlineHome, label: "Home", link: "/" },
    {
        id: "dashboard",
        Icon: AiFillDashboard,
        label: "Dashboard",
        link: "/dashboard/profile",
    },
    {
        id: "messages",
        Icon: SiImessage,
        label: "Messages",
        active: true,
    },
    {
        id: "activity",
        Icon: IoIosNotificationsOutline,
        label: "Activity",
        link: "/dashboard/activity"
    },
    {
        id: "settings",
        Icon: IoSettingsOutline,
        label: "Settings",
        action: "create_group"
    },
];
