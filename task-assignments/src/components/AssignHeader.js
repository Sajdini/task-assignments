import React from "react";
import { employees, statuses } from "../data";

function AssignHeader(props) {
  return (
    <div className="container" style={{ marginTop: "20px"  }}>
      <h1>Assignments</h1>
      <table className="table table-primary table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input
                type="text"
                placeholder="Task name"
                value={props.task.name}
                onChange={(e) => {
                  props.setTask({ ...props.task, name: e.target.value });
                }}
              />
            </th>
            <th scope="col">
              <select
                className="form-select"
                value={props.task.phase}
                onChange={(e) => {
                  props.setTask({ ...props.task, phase: e.target.value });
                }}
              >
                <option defaultValue>Status</option>
                {statuses.map((status, index) => (
                  <option key={index}>{status}</option>
                ))}
              </select>
            </th>
            <th scope="col">
              <select
                className="form-select"
                value={props.task.person}
                onChange={(e) => {
                  props.setTask({ ...props.task, person: e.target.value });
                }}
              >
                <option defaultValue>Employee</option>

                {employees.map((employee, index) => (
                  <option key={index}>{employee}</option>
                ))}
              </select>
            </th>
            <th scope="col">
              <button onClick={props.clickHandler}>Assign</button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default AssignHeader;
