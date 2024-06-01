import React, { useContext } from "react";
import TeamCard from "./TeamCard";
import { tasks } from "../database/tasks";
import { AppContext } from "../contexts/context";


const Team = () => {
  const {state, dispatch} = useContext(AppContext)
  return (
    <main className="flex flex-col mb-auto">
      <div></div>
      <div className="flex flex-row">
        <TeamCard name="Team 1" tasks={state}/>
      </div>
    </main>
  );
};

export default Team;
