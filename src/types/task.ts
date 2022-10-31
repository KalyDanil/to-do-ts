import { ITask } from './toDo';

export interface ITaskProps {
  task: ITask;
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<[] | ITask[]>>;
  index: number;
};