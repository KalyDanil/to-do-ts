import { useState } from 'react';
import { ITopLineProps } from '../../types/topLine';
import { TopLineStyle } from './TopLine.style';

const TopLine: React.FC<ITopLineProps> = (props) => {
  const { tasks, setTasks, isAllChecked } = props;
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.split(' ').join('') === '') {
      return;
    }
    const newTasks = tasks.slice(0);
    newTasks.push({ text: value, isCompleted: false });
    setTasks(newTasks);
    setValue('');
  };

  const onCompleteAllClick = () => {
    const newTasks = tasks.slice(0);

    newTasks.forEach((task) => {
      task.isCompleted = !isAllChecked;
    });

    setTasks(newTasks);
  };

  return (
    <TopLineStyle onSubmit={onSubmit} isAllChecked={isAllChecked} tasksLength={tasks.length}>
      {tasks.length !== 0 && (
        <label className="topLine__CheckAll" id="checkAll" role="allCompleting" onClick={onCompleteAllClick}>❯</label>
      )}
      <input className="topLine__input" role="toDoInput" type="text" placeholder="What needs to be done?" onChange={onChange} value={value} />
    </TopLineStyle>
  );
};

export default TopLine;