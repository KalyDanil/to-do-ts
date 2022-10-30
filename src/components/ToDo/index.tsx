import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
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
    if (activeTasks.length === 0 && tasks.length !== 0) {
      setIsAllChecked(true);
      return;
    }
    setIsAllChecked(false);
  }, [tasks]);

  const allTasksList = tasks.map((task, index) => { 
    return (
      <Task
        tasks={tasks}
        setTasks={setTasks} 
        task={task}
        itemLeft={itemLeft}
        setItemLeft={setItemLeft}
        key={v4()}
        index={index}
      />
    );
  });

  const completedTasksList = tasks.map ((task, index) => {
    if (!task.isCompleted) {
      return <div key={v4()}></div>;
    }

    return (
      <Task
        tasks={tasks}
        setTasks={setTasks} 
        task={task}
        itemLeft={itemLeft}
        setItemLeft={setItemLeft}
        key={v4()}
        index={index}
      />
    )
  });

  const activeTasksList = tasks.map((task, index) => {
    if (task.isCompleted) {
      return <div key={v4()}></div>;
    }

    return (
      <Task
        tasks={tasks}
        setTasks={setTasks} 
        task={task}
        itemLeft={itemLeft}
        setItemLeft={setItemLeft}
        key={v4()}
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
        itemLeft={itemLeft}
        setItemLeft={setItemLeft}
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