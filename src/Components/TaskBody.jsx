import React, { useState } from "react";
import { FiXOctagon } from "react-icons/fi";
import { BiSolidEditAlt } from "react-icons/bi";
import { CgCheckO } from "react-icons/cg";
import { BiSolidCopy } from "react-icons/bi";
import { TiArrowRightOutline } from "react-icons/ti";
import { CssSyntaxError } from "postcss";
const TaskBody = ({ task, setTask, mainTask, setmainTask }) => {
  const [isCompleted, setisCompleted] = useState(false);
  /////////////////////////// DELETE Task 🖤
  const deleteHandler = (index) => {
    const updatedTask = mainTask.filter((t) => {
      return index !== t.id;
    });
    setmainTask(updatedTask);
  };
  /////////////////////////// Edit Task 🖤
  const editTask = (id) => {
    let newEditTask = mainTask.find((t) => {
      return t.id === id;
    });
    console.log(newEditTask);

    setTask(newEditTask.task);
    const updatedTask = mainTask.filter((t) => {
      return id !== t.id;
    });
    setmainTask(updatedTask);
  };
  /////////////////////////// Complete Task 🖤
  // const handleComplete = (index) => {
  //   const completedTask = mainTask.filter((t) => {
  //     return index !== t.id;
  //     setisCompleted(!isCompleted);
  //   });
  //   setmainTask(completedTask);
  //   // setisCompleted(true);
  // };

  /////////////////////////// Copy Task 🖤
  const copyTask = (task) => {
    navigator.clipboard.writeText(task).then(() => {
      alert(`Copied => ${task}`);
    });
  };

  return (
    <>
      <div className="py-8 px-1 bg-slate-200 rounded-md">
        {mainTask.length > 0 ? (
          mainTask.map((t, ind) => {
            return (
              <div
                key={ind}
                className="container bg-violet-200 mb-5 flex justify-start items-center py-2  rounded-md"
              >
                <div className=" w-[8%] flex items-center justify-center">
                  <h3 className="font-semibold ">{ind + 1}</h3>
                  <TiArrowRightOutline className="cursor-pointer w-[16px] h-[22px] mt-[2px] mx-[6px] text-violet-700" />
                </div>

                <h4
                  className={isCompleted ? "line-through w-[85%]" : "w-[85%]"}
                >
                  {t.task}
                </h4>
                <div className="  flex items-center gap-2 w-[15%]">
                  <FiXOctagon
                    onClick={() => deleteHandler(t.id)}
                    className="cursor-pointer hover:text-red-600 w-[18px] h-[18px] text-violet-700 duration-500 active:scale-95"
                  />
                  <BiSolidEditAlt
                    onClick={() => editTask(t.id)}
                    className="cursor-pointer w-[18px] h-[18px] hover:text-yellow-500 text-violet-700 duration-500 active:scale-95"
                  />
                  {/* <CgCheckO
                    onClick={() => handleComplete(t.id)}
                    className="cursor-pointer w-[18px] h-[18px] hover:text-green-600 text-violet-700 duration-500 active:scale-95"
                  /> */}
                  <BiSolidCopy
                    onClick={() => copyTask(t.task)}
                    className="cursor-pointer w-[22px] h-[22px] hover:text-orange-500 text-violet-700 duration-500 active:scale-95"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="text-center text-violet-700">No Task to show...</h2>
        )}
      </div>
    </>
  );
};
export default TaskBody;
