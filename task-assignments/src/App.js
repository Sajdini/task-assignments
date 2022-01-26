import "./App.css";
import Assign from "./components/Assign";
import Assignments from "./components/Assignments";
import TaskContextProvider from "./components/task-context";
function App() {
  return (
    <TaskContextProvider>
      <Assign />
      <Assignments />
    </TaskContextProvider>
  );
}

export default App;
