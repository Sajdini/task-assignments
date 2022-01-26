import React, { useContext } from "react";
import { TaskContext } from "./task-context";
import "../index.css";
function Assignments(props) {
  const { tasks } = useContext(TaskContext);
  const { dispatch } = useContext(TaskContext);

  return (
    <div className="container" style={{ marginTop: "40px", border: "solid" }}>
      <table className="table table-primary table-hover">
        <tbody>
          {tasks.map((task, index) => {
            const { name, phase, person, date, id } = task;
            return (
              <tr
                key={+index}
                className={`table-${index % 2 == 0 ? "light" : "dark"}`}
              >
                <td>{name}</td>
                <td>{phase}</td>
                <td>{person}</td>
                <td>{date}</td>
                <td style={{ marginLeft: "100px" }}>
                  <button
                    id={id}
                    onClick={() =>
                      dispatch({ type: "REMOVE_TASK", id: task.id })
                    }
                  >
                    Delete Task
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Assignments;
