import { useEffect, useState } from 'react';
import { ITask } from '../../types/toDo';
import { listOptions } from '../../utils/constants';
import BotLine from '../BotLine';
import Task from '../Task';
import TopLine from '../TopLine';
import { ToDoStyle } from './ToDo.style';

const ToDo: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [list, setList] = useState(listOptions.all);
  const [itemLeft, setItemLeft] = useState(0);
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    const activeTasks = tasks.filter((task) => !task.isCompleted);
    setItemLeft(activeTasks.length);
    if (activeTasks.length === 0 && tasks.length !== 0) {
      setIsAllChecked(true);
      return;
    }
    if (tasks.length === 0) {
      setList(listOptions.all);
    }
    setIsAllChecked(false);
  }, [tasks]);

  const allTasksList = tasks.map((task, index) => { 
    return (
      <Task
        tasks={tasks}
        setTasks={setTasks} 
        task={task}
        key={Math.random() + index}
        index={index}
      />
    );
  });

  const completedTasksList = tasks.map ((task, index) => {
    if (!task.isCompleted) {
      return <div key={Math.random() + index}></div>;
    }

    return (
      <Task
        tasks={tasks}
        setTasks={setTasks} 
        task={task}
        key={Math.random() + index}
        index={index}
      />
    )
  });

  const activeTasksList = tasks.map((task, index) => {
    if (task.isCompleted) {
      return <div key={Math.random() + index}></div>;
    }

    return (
      <Task
        tasks={tasks}
        setTasks={setTasks} 
        task={task}
        key={Math.random() + index}
        index={index}
      />
    );
  });

  return (
    <ToDoStyle>
      <h1>ToDoList</h1>
      <TopLine 
        setTasks={setTasks} 
        tasks={tasks}
        isAllChecked={isAllChecked}
      />
      {list === listOptions.all && allTasksList}
      {list === listOptions.active && activeTasksList}
      {list === listOptions.completed && completedTasksList}
      {tasks.length !== 0 && (
        <BotLine 
          itemLeft={itemLeft} 
          setList={setList} 
          tasks={tasks}
          setTasks={setTasks}
        />
      )}
    </ToDoStyle>
  );
};

export default ToDo;