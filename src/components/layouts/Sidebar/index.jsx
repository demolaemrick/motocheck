import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { routes } from "../../../constants/routes";

import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={classes.sidebar}>
      <div className={classes.logo__container}>
        <img src={Logo} alt="Motocheck Logo" />
      </div>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <NavLink to={route.pathname} className={classes.nav__link}>
              <img src={`${route.icon}`} alt="" />
              <span>{route.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
