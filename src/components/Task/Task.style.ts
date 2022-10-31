import styled from 'styled-components';
import { taskStyle } from '../../utils/constants';

export const TaskStyle = styled.div<{isCompleted: boolean}>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 58px;
  border-bottom: 1px solid rgb(226, 226, 226);

.task__checkbox {
  margin-top: 10px;
  margin-left: 1px;
}
    
.task__text {
  width: 70%;
  font-size: 24px;
  text-align: left;
  margin-top: 3px;
  word-break: break-all;
  padding: 15px 0px 15px 35px;
  font-size: 24px;
  flex-grow: 1;
  color: ${props => props.isCompleted ? taskStyle.gray : ""};
  text-decoration: ${props=>props.isCompleted ? taskStyle.textDecoration : ""};
}

.task__removeButton {
  font-size: 30px;
  color: #cc9a9a;
  margin-top: 20px;
  margin-right: 20px;
}
`;