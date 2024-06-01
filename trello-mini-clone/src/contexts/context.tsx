import React, { ReactElement, createContext, useReducer } from "react";
import { TaskType } from "../lib/types";
import { Actions, taskReducer } from "./reducer";
import { tasks } from "../database/tasks";


const initialState: TaskType[] = tasks;

const AppContext = createContext<{
  state: TaskType[];
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

type ChildrenType = {
  children ?: ReactElement | ReactElement[]
}

const AppProvider: React.FC<ChildrenType> = ({children}) => {
  const [state, dispatch] = useReducer(taskReducer, initialState)
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider};


