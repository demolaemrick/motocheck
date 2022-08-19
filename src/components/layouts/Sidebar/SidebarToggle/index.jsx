import classes from "./SidebarToggle.module.css";

const SidebarToggle = ({ clicked }) => {
  return (
    <div className={classes.toggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SidebarToggle;
