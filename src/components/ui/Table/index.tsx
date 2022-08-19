import classes from "./Table.module.css";

const Table = ({ tableHeaders, tableData }) => {
  const nameInitials = (name) => {
    let [firstName, lastName] = name.split(" ");
    const initials = firstName[0] + lastName[0];
    return initials;
  };

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header.key}>{header.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            {tableHeaders.map((header) => (
              <td key={header.key} data-label={header.title}>
                {header.key === "user" && (
                  <span className={classes.initials}>
                    {nameInitials(item.user)}
                  </span>
                )}
                <span>{item[header.key]}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
