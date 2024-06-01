import React, { useRef, useEffect, useContext, useState } from "react";
import { AppContext } from "../contexts/context";
import { TaskType } from "../lib/types";

interface PropsType {
  setAddingCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputTask = ({ setAddingCard }: PropsType) => {
  const formInput = useRef<HTMLInputElement>(null);
  // const [todo, setTodo] = useState<TaskType>({
  //   title: "",
  //   dateCreated: new Date(),
  //   dateDue: new Date(),
  //   details: "",
  //   createdBy: "Sam",
  //   assignedTo: "",
  //   urgent: false,
  //   completed: false,
  // });
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (formInput.current) {
      formInput.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    // console.log(e.currentTarget)
    e.preventDefault();
    const form = e.currentTarget;
    const title = document.querySelector("#title") as HTMLInputElement;
    const dateDue = document.querySelector(
      'input[type="date"]'
    ) as HTMLInputElement;
    const details = document.querySelector("#details") as HTMLTextAreaElement;
    const created = document.getElementById("created") as HTMLSelectElement;
    const assigned = document.getElementById("assigned") as HTMLSelectElement;
    const urgent = document.querySelector(
      "input[type=radio]:checked"
    ) as HTMLInputElement;

    const sel = assigned.selectedIndex;
    const opt = assigned.options[sel];
    const assignedValue = opt.value;

    dispatch({
      type: "ADD_TASK",
      payload: {
        title: title.value,
        dateCreated: new Date(),
        dateDue: new Date(dateDue.value),
        details: details.value,
        createdBy: created.value,
        assignedTo: assignedValue,
        urgent: urgent !== null,
        completed: false,
      },
    });

    setAddingCard(false);
    console.log("input task")
    {console.log(state)}
  };

  const content = (
    <div className="flex flex-col bg-[#f5f5f5] p-2 my-2 rounded-lg shadow-lg">
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          id="title"
          name="title"
          type="text "
          placeholder="Title"
          ref={formInput}
          required
        />
        <label className="text-sm text-[#333333]">Created by: </label>
        <select required id="created" name="Employee list" size={1}>
          <option value="Sam">Sam</option>
          <option value="Stacy">Stacy</option>
          <option value="Dick">Dick</option>
          <option value="John">John</option>
          <option value="Harry">Harry</option>
          <option value="Otis">Otis</option>
        </select>
        <label className="text-sm text-[#333333]">Created on: {Date()} </label>
        <div className="flex flex-row gap-2 items-center">
          <label className="text-sm text-[#333333]">Due on: </label>
          <input required id="dateDue" type="date" />
        </div>
        <textarea id="details" placeholder="Details" />
        <label className="text-sm text-[#333333]">Assigned to: </label>
        <select required id="assigned" name="Employee list" size={1}>
          <option value="Sam">Sam</option>
          <option value="Stacy">Stacy</option>
          <option value="Dick">Dick</option>
          <option value="John">John</option>
          <option value="Harry">Harry</option>
          <option value="Otis">Otis</option>
        </select>
        <div className="flex gap-2">
          <input type="radio" id="urgent" value="urgent" />
          <label htmlFor="urgent">Urgent</label>
        </div>
        <div className="flex flex-row justify-around gap-4">
          <button className="w-[150px] font-semibold border-2 bg-[#228B22] text-white">
            Create
          </button>
          <button
            type="button"
            onClick={() => {
              setAddingCard(false);
            }}
            className="w-[150px] font-semibold border-2 bg-[#C70000] text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
  return content;
};

export default InputTask;
