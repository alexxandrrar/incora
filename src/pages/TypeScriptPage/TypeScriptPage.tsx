import { FC } from "react";

const code = `
  const firstUser: IUser = {
    id: 1,
    name: "Sasha",
  };
  const secondUser: IUser = {
    id: 2,
    name: "Masha",
  };

  const firstTask: ITask = {
    id: 1,
    durationInMin: 45,
    completed: true,
    developer: firstUser,
    getInfo() {
      return "Info about the task";
    },
  };
  const secondTask: ITask = {
    id: 2,
    durationInMin: 60,
    completed: false,
    developer: secondUser,
    getInfo() {
      return "Info about the task";
    },
  };

  const project: IProject = {
    tasks: [firstTask, secondTask],
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks.filter((el) => el.id !== id);
    },
    getTotalTime() {
      let result: number = 0;
      for (let i of this.tasks) {
        result += i.durationInMin;
      }
      return result;
    },
    getAllTasksByDeveloper(id) {
      return this.tasks.filter((el) => el.developer.id === id);
    },
    editTask(task) {
      console.log("Task was edited");
    },
  };

  const app: IApp = {
    name: "Sasha's app",
    setName(name) {
      console.log(name);
    },
    projects: [project],
    addProjects(project) {
      this.projects.push(project);
    },
  };
`;
export const TypeScriptPage: FC = () => <pre>{code}</pre>;
