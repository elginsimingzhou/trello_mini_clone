import React, { useState } from "react";
import TaskComponent from "./TaskComponent";
import { TaskType } from "../lib/types";
import InputTask from "./InputTask";

interface PropsType {
  name: string;
  tasks: TaskType[];
  // dispatch: React.Dispatch<Actions>
}


const TeamCard = ({ name, tasks }: PropsType) => {

const [addingCard, setAddingCard] = useState<boolean>(false);

const addCard = () => {
  // console.log("addcard")
  setAddingCard(true);
}

const content = (

    <div className="flex flex-col border-2 border-[#333333] px-4 py-2 mx-4 my-3 bg-[#dedede] min-w-[150px]">
      <h1 className="text-xl font-bold mb-3 text-[#333333]">{name}</h1>
      <ul>
        {tasks.map((task) => {
          return <TaskComponent key={task.title} task={task} />
        })}
        {addingCard? <InputTask setAddingCard = {setAddingCard} /> : null}
      </ul>
      <div className="flex flex-row items-center mt-3">
        <button className="flex flex-row font-bold text-[#333333] justify-center" onClick={addCard}>
          <svg
          className="ml-3"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#333333"
            width="35px"
            height="35px"
            viewBox="0 0 80 80"
          >
            <g>
              <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141   c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27   c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435   c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z" />
            </g>
          </svg>
          Add Card
        </button>
      </div>
    </div>


)

  return content;
};

export default TeamCard;
