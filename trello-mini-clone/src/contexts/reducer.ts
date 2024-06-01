import { TaskType } from "../lib/types";
import { Reducer } from "react";

export type Actions =
  | { type: "ADD_TASK"; payload: TaskType }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "COMPLETED"; payload: string };

export const taskReducer = (state: TaskType[], action: Actions) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          title: action.payload.title,
          dateCreated: action.payload.dateCreated,
          dateDue: action.payload.dateDue,
          details: action.payload.details,
          createdBy: action.payload.createdBy,
          assignedTo: action.payload.assignedTo,
          urgent: action.payload.urgent,
          completed: false,
        },
      ];
    case "DELETE_TASK":
      return state.filter((task: TaskType) => task.title !== action.payload);

    case "COMPLETED":
      return state.map((task: TaskType) =>
        task.title === action.payload ? { ...task, completed: true } : task
      );

    default:
      return state;
  }
};
