import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.layout}>
      <aside>
        <Sidebar />
      </aside>
      <main className={classes.main}>
        <Header clicked={() => setOpen(!open)} />
        <div
          className={[classes.mobile__nav, `${open && classes.open}`].join(" ")}
        >
          <Sidebar />
        </div>

        {children}
      </main>
    </div>
  );
};

export default Layout;
