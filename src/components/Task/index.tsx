import { ITaskProps } from '../../types/task';
import { TaskStyle } from './Task.style';

const Task: React.FC<ITaskProps> = (props) => {
  const {task, tasks, setTasks, itemLeft, setItemLeft, index} = props;

  const onChange = () => {
    const newTasks = tasks.slice(0);

    newTasks.forEach((task) => {
      if (newTasks.indexOf(task) === index) {
        task.isCompleted = !task.isCompleted;
      }
    });

    setTasks(newTasks);

    if (task.isCompleted) {
      setItemLeft(itemLeft - 1);
      return;
    }

    setItemLeft(itemLeft + 1);
  };

  const onDeleteClick = () => {
    const newTasks = tasks.filter((task) => tasks.indexOf(task) !== index);
    setTasks(newTasks);
    if (!task.isCompleted) {
      props.setItemLeft(props.itemLeft -1);
    }
  };
  
  return (
    <TaskStyle isCompleted={task.isCompleted}>
      <input className="task__checkbox" type="checkbox" onChange={onChange} checked={task.isCompleted}/>
      <span className="task__text">
        {task.text}
      </span>
      <label className="task__removeButton" onClick={onDeleteClick}>×</label>
    </TaskStyle>
  );
};

export default Task;