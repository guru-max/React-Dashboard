import React from "react";
import Tableui from "../subcomp/Tableui";
import Subheader from "../subcomp/Subheader";

const Timesheet = () => {
  return (
    <div>
      <Subheader title={"Timesheet"} buttonName={"View full sheet"} />
      <Tableui />
    </div>
  );
};

export default Timesheet;
