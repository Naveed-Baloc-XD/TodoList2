import react from "react";
import Navbar from "./Components/Navbar";
import TaskInput from "./Components/TaskInput";

function App() {
  return (
    <main className="w-[600px] container">
      <Navbar />
      <TaskInput />
    </main>
  );
}

export default App;
