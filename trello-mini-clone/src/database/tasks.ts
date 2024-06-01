import { TaskType } from "../lib/types";

export const tasks: TaskType[] = [
  {
    title: "Orientation for new hire",
    dateCreated: new Date("2024-05-01"),
    dateDue: new Date("2024-05-11"),
    details: "Get laptop from HR and do e-learning",
    createdBy: "Stacy",
    assignedTo: "Sam",
    urgent: true,
    completed: false,
  },
 {
    title: "Create data report for PM",
    dateCreated: new Date("2024-05-02"),
    dateDue: new Date("2024-05-12"),
    details: "Create new KPI to monitor and generate excel report.",
    createdBy: "Stacy",
    assignedTo: "Sam",
    urgent: false,
    completed: false,
  },
];