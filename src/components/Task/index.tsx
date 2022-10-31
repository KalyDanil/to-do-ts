import { Checkbox } from '@mui/material';
import { ITaskProps } from '../../types/task';
import { TaskStyle } from './Task.style';

const Task: React.FC<ITaskProps> = (props) => {
  const {task, tasks, setTasks, index} = props;

  const onCheckBoxClick = () => {
    const newTasks = tasks.slice(0);

    newTasks.forEach((task) => {
      if (newTasks.indexOf(task) === index) {
        task.isCompleted = !task.isCompleted;
      }
    });

    setTasks(newTasks);
  };

  const onDeleteClick = () => {
    const newTasks = tasks.filter((task) => tasks.indexOf(task) !== index);
    setTasks(newTasks);
  };
  
  return (
    <TaskStyle isCompleted={task.isCompleted} role="task">
      <Checkbox className="task__checkbox" onClick={onCheckBoxClick} checked={task.isCompleted} color="success"/>
      <span className="task__text">
        {task.text}
      </span>
      <label className="task__removeButton" onClick={onDeleteClick}>×</label>
    </TaskStyle>
  );
};

export default Task;