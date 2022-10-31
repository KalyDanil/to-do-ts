import { ITask } from './toDo';

export interface ITopLineProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<[] | ITask[]>>;
  isAllChecked: boolean;
};