import React, { createContext, useReducer, useEffect } from "react";
import { taskReducer } from "./taskReducer";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const localData = localStorage.getItem("assignment");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("assignment", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
