export interface TaskType {
  title: string;
  dateCreated: Date;
  dateDue: Date;
  details: string;
  createdBy: string;
  assignedTo: string | string[];
  urgent: boolean;
  completed: boolean;
}

export interface EmployeeType {
  id: number;
  name: string;
  team: string | string[];
  role: string;
}
