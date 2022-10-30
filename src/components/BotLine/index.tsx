import { useState } from 'react';
import { IBotLineProps } from '../../types/botLine';
import { button, listOptions } from '../../utils/constants';
import { BotLineStyle } from './BotLine.style';

const BotLine: React.FC<IBotLineProps> = (props) => {
  const {itemLeft, setList, tasks, setTasks} = props;
  const [selectedButton, setSelectedButton] = useState(button.all);

  const onShowClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const target = e.target as HTMLInputElement;
    setList(target.value);
    setSelectedButton(target.id)
  };

  const onClearClick = () => {
    const newTasks = tasks.filter((task) => !task.isCompleted);
    setTasks(newTasks);
  };
  
  return (
    <BotLineStyle selectedButton={selectedButton}>
      <span className="botLine__count">{itemLeft} items left</span>
      <div className="botLine__centralButtons">
          <input className="botLine__button" id={button.all} type="button" value={listOptions.all} onClick={onShowClick} />
          <input className="botLine__button" id={button.active} type="button" value={listOptions.active} onClick={onShowClick} />
          <input className="botLine__button" id={button.completed} type="button" value={listOptions.completed} onClick={onShowClick} />
      </div>
      <input className="botLine__clearButton" id="buttonClear" type="button" value="Clear completed" onClick={onClearClick} />
    </BotLineStyle>
  );
};

export default BotLine;