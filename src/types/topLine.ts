import { ITask } from './toDo';

export interface ITopLineProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<[] | ITask[]>>;
  itemLeft: number;
  setItemLeft: React.Dispatch<React.SetStateAction<number>>;
  isAllChecked: boolean;
};