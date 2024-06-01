import React, { useContext } from "react";
import { TaskType } from "../lib/types";
import { AppContext } from "../contexts/context";

interface PropsType {
  task: TaskType;
}

const TaskComponent = ({ task }: PropsType) => {
  const { state, dispatch } = useContext(AppContext);
  const content = (
    <div className="flex flex-col bg-[#f5f5f5] p-2 my-2 rounded-lg shadow-lg">
      <div className="flex flex-row justify-between">
        <div className="flex mb-4">
          {task.completed? <s className="font-semibold">{task.title}</s>: <h1 className="font-semibold">{task.title}</h1>}
          {task.urgent ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-2"
            >
              <rect width="24" height="24" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V13ZM13 15.9888C13 15.4365 12.5523 14.9888 12 14.9888C11.4477 14.9888 11 15.4365 11 15.9888V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V15.9888ZM9.37735 4.66136C10.5204 2.60393 13.4793 2.60393 14.6223 4.66136L21.2233 16.5431C22.3341 18.5427 20.8882 21 18.6008 21H5.39885C3.11139 21 1.66549 18.5427 2.77637 16.5431L9.37735 4.66136Z"
                fill="red"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-2"
            >
              <rect width="24" height="24" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V13ZM13 15.9888C13 15.4365 12.5523 14.9888 12 14.9888C11.4477 14.9888 11 15.4365 11 15.9888V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V15.9888Z"
                fill="#e9d502"
              />
            </svg>
          )}
        </div>
        <div className="flex flex-row justify-center items-center mb-4">
          <button
            onClick={() => {
              // console.log("complete");
              dispatch({ type: "COMPLETED", payload: task.title });
            }}
            className="ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 -0.5 25 25"
              fill="none"
              className="mx-2"
            >
              <path
                d="M5.5 12.5L10.167 17L19.5 8"
                stroke="#4BB543"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              // console.log("delete");
              dispatch({ type: "DELETE_TASK", payload: task.title });
            }}
            className="ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z"
                fill="#C70000"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12404C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001ZM10.2463 12.1886C10.2051 11.7548 9.83753 11.4382 9.42537 11.4816C9.01321 11.525 8.71251 11.9119 8.75372 12.3457L9.25372 17.6089C9.29494 18.0427 9.66247 18.3593 10.0746 18.3159C10.4868 18.2725 10.7875 17.8856 10.7463 17.4518L10.2463 12.1886ZM14.5746 11.4816C14.9868 11.525 15.2875 11.9119 15.2463 12.3457L14.7463 17.6089C14.7051 18.0427 14.3375 18.3593 13.9254 18.3159C13.5132 18.2725 13.2125 17.8856 13.2537 17.4518L13.7537 12.1886C13.7949 11.7548 14.1625 11.4382 14.5746 11.4816Z"
                fill="#C70000"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-row text-sm gap-6 text-[#333333]">
        {task.completed? <s >Created by: {task.createdBy}</s>:<p>Created by: {task.createdBy}</p>}
        {task.completed?<s>Assigned to: {task.assignedTo}</s>:<p>Assigned to: {task.assignedTo}</p>}
        {task.completed?<s>Due by: {task.dateDue.toLocaleString()}</s>:<p>Due by: {task.dateDue.toLocaleString()}</p>}
      </div>
      {task.completed?<s className="text-sm mt-3 mb-2">{task.details}</s>:<p className="text-sm mt-3 mb-2">{task.details}</p>}
    </div>
  );
  return content;
};

export default TaskComponent;
