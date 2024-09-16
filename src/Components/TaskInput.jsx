import React, { useEffect, useState } from "react";
import TaskBody from "./TaskBody";
import { v4 as uuidv4 } from "uuid";
const TodoBody = () => {
  const [task, setTask] = useState("");
  const [mainTask, setmainTask] = useState(() => {
    const savedTask = localStorage.getItem("mainTask");
    return savedTask ? JSON.parse(savedTask) : [];
  });
  useEffect(() => {
    localStorage.setItem("mainTask", JSON.stringify(mainTask));
  }, [mainTask]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { id: uuidv4(), task }]);
    setTask("");
    console.log(mainTask);
  };
  return (
    <main className="container  w-[100%] h-[70vh] pt-[8vh]">
      <h1 className="text-[22px] font-bold ml-[10px] text-violet-700 ">
        Add Task
      </h1>
      <form className="w-[100%]  flex items-center justify-center gap-8 ">
        <div className="flex items-center justify-center py-5 gap-5 w-[70%]">
          <input
            type="text"
            className="py-2 w-[100%] px-3 border-2   border-violet-600 hover:border-violet-600 rounded-xl"
            placeholder="Enter Task here ... 🖤"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={(e) => submitHandler(e)}
          className="bg-violet-700 py-[6px] px-3 text-white rounded-lg border-2 hover:border-violet-700   hover:bg-violet-800 duration-500 active:scale-95"
        >
          Add
        </button>
        <button className="bg-violet-700 py-[6px] px-3 text-white rounded-lg border-2 hover:border-violet-700   hover:bg-violet-800 duration-500 active:scale-95">
          Clear
        </button>
      </form>
      <hr />
      <TaskBody
        task={task}
        setTask={setTask}
        mainTask={mainTask}
        setmainTask={setmainTask}
      />
    </main>
  );
};

export default TodoBody;
