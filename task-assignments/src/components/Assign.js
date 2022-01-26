import React, { Fragment, useContext, useState } from "react";
import { TaskContext } from "./task-context";
import AssignHeader from "./AssignHeader";

function Assign() {
  const { dispatch } = useContext(TaskContext);
  const [task, setTask] = useState({
    name: "",
    phase: "",
    person: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name === "" || task.phase === "" || task.person === "")
      return alert("Please input all required informations");

    dispatch({
      type: "ADD_TASK",
      task: { ...task, date: `${new Date().toDateString()}` },
    });
    setTask({
      name: "",
      phase: "",
      person: "",
      date: "",
    });
  };

  return (
    <Fragment>
      <AssignHeader task={task} setTask={setTask} clickHandler={handleSubmit} />
    </Fragment>
  );
}

export default Assign;
