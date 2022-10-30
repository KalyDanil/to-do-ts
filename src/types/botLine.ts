import { ITask } from './toDo';

export interface IBotLineProps {
  tasks: ITask[];
  itemLeft: number;
  setList: React.Dispatch<React.SetStateAction<string>>;
  setTasks: React.Dispatch<React.SetStateAction<[] | ITask[]>>;
};