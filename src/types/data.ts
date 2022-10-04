export interface IItem {
  _id: string;
  name: string;
  trips: number;
}

export interface IData {
  data: IItem[];
  totalPages: number;
  totalPassengers: number;
}

export interface IApp {
  name: string;
  setName(name: string): void;
  projects: IProject[];
  addProjects(project: IProject): void;
}

export interface IProject {
  tasks: ITask[];
  addTask(task: ITask): void;
  editTask(task: Partial<ITask>): void;
  deleteTask(id: number): void;
  getTotalTime(): number;
  getAllTasksByDeveloper(id: number): ITask[];
}

export interface ITask {
  id: number;
  durationInMin: number;
  completed: boolean;
  developer: IUser;
  getInfo(): string;
}

export interface IUser {
  id: number;
  name: string;
}
