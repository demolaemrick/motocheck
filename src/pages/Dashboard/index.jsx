import Overview from "./Overview";
import ActionCard from "../../components/ui/Cards/ActionCard";
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";tableHeaders
import { tableData, tableHeaders,  } from "../../constants/table";
import Note from "../../assets/note.svg";
import Group from "../../assets/group.svg";
import Files from "../../assets/files.svg";

import classes from "./Dashboard.module.css";

const Dashboard = () => {

  return (
    <div className={classes.dashboard}>
      <section>
        <h1>Overview</h1>
        <Overview />
      </section>
      <section className={classes.section__actions}>
        <h1>Key actions</h1>
        <div className={classes.actions}>
          <ActionCard color="primary" text="Form" icon={Note} />
          <ActionCard color="secondary" text="Autocenter" icon={Group} />
          <ActionCard color="tertiary" text="Dispatch" icon={Files} />
        </div>
      </section>
      <section className={classes.section__activity}>
        <h1>Activity log</h1>
        <div className={classes.table__container}>
          <Table tableHeaders={tableHeaders} tableData={tableData} />
        </div>
        <hr />
        <div className={classes.button__container}>
          <Button>View more activity</Button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
