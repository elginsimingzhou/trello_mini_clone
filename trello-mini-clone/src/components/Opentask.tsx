import React, { useContext, useEffect, useState } from "react";
import { employees } from "../database/employees";
import { TaskType } from "../lib/types";
import { AppContext } from "../contexts/context";

const selectedEmployee = employees[0];

const Opentask = () => {
  const [personalTasks, setPersonalTasks] = useState<TaskType[]>([]);
  const {state} = useContext(AppContext);

  useEffect(() => {
    {console.log(state)}
    setPersonalTasks(
      state.filter((task) => {
        return task.assignedTo === selectedEmployee.name && !task.completed;
      })
    );
  }, []);

  const content = (
    <div className="flex flex-col border-2 border-[#f5f5f5] text-white w-full p-4 mt-10 justify-center items-center">
      <h1 className="text-3xl font-bold">{personalTasks.length}</h1>
      <p className="text-xl font-semibold text-[#dedede]">Open Tasks</p>
      <ul>{personalTasks.map((task)=>{return <li key={task.title} className="flex justify-center items-center my-2 px-4 border-2 border-white rounded-full duration-200 hover:bg-[#ffffff] hover:text-black">{task.title}</li>})}</ul>
    </div>
  );
  return content;
};

export default Opentask;
