import Home from "../assets/home.svg";
import Store from "../assets/store.svg";
import Notebooks from "../assets/notebooks.svg";
import FolderOpen from "../assets/folder-open.svg";
import Message from "../assets/message.svg";
import Users from "../assets/users-alt.svg";
import BarChart from "../assets/bar-chart-2.svg";
import Setting from "../assets/setting.svg";

export const routes = [
  {
    title: "Dasboard",
    pathname: "/",
    icon: Home,
  },
  {
    title: "Autocenters",
    pathname: "/auto-centers",
    icon: Store,
  },
  {
    title: "Forms",
    pathname: "/forms",
    icon: Notebooks,
  },
  {
    title: "Resources",
    pathname: "/resources",
    icon: FolderOpen,
  },
  {
    title: "Dispatch",
    pathname: "/dispatch",
    icon: Message,
  },
  {
    title: "Groups",
    pathname: "/groups",
    icon: Users,
  },
  {
    title: "Report",
    pathname: "/report",
    icon: BarChart,
  },
  {
    title: "Finance",
    pathname: "/finance-sheet",
    icon: Setting,
  },
  {
    title: "Settings",
    pathname: "/settings",
    icon: Setting,
  },
];
