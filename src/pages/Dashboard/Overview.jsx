import Arrow from "../../assets/arrow-up.svg";
import classes from "./Dashboard.module.css";

const Overview = () => {
  return (
    <div className={classes.overview}>
      <div className={classes.overview__card}>
        <div className={classes.overview__item}>
          <div>
            <h3>228</h3>
            <span>
              <img src={Arrow} alt="" />
              <span>+3</span>
            </span>
          </div>
          <span>Autocentres</span>
        </div>
        <div className={classes.overview__item}>
          <h3>44</h3>
          <span>Forms Created</span>
        </div>
        <div className={classes.overview__item}>
          <h3>QWG3O32K</h3>
          <span>Organization Key</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
