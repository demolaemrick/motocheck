import Arrow from "../../../../assets/arrow.svg";
import classes from "./ActionCard.module.css";

const ActionCard = ({ text, icon, color }) => {
  return (
    <div className={[classes.card, classes[color]].join(" ")}>
      <div className={classes.wrapper}>
        <div className={[classes.icon__container, classes[color]].join(" ")}>
          <img src={icon} alt="action card icon" />
        </div>
        <div className={classes.texts}>
          <span>Create new</span>
          <span>{text}</span>
        </div>
      </div>
      <div className={classes.card__icon}>
        <img src={Arrow} alt="" />
      </div>
    </div>
  );
};

export default ActionCard;
