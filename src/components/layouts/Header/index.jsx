import { useLocation } from "react-router-dom";
import SidebarToggle from "../Sidebar/SidebarToggle";
import Avatar from "../../../assets/avatar.svg";
import DropDown from "../../../assets/drop-down.svg";

import { routes } from "../../../constants/routes";
import classes from "./Header.module.css";

const Header = ({ clicked }) => {
  const { pathname } = useLocation();
  const currentRoute = routes.find((route) => route.pathname === pathname);
  

  return (
    <header className={classes.header}>
      <SidebarToggle clicked={clicked} />
      <div className={classes.header__text}>{currentRoute.title}</div>
      <div className={classes.header__end}>
        <img src={Avatar} alt="profile picture" />
        <img src={DropDown} alt="drop down icon" />
      </div>
    </header>
  );
};

export default Header;
