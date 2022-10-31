import styled from 'styled-components';

export const BotLineStyle = styled.div<{selectedButton: string}>`
  height: 50px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #777;
 
::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 500px;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
              0 8px 0 -3px #f6f6f6,
              0 9px 1px -3px rgba(0, 0, 0, 0.2),
              0 16px 0 -6px #f6f6f6,
              0 17px 2px -6px rgba(0, 0, 0, 0.2);
}


.botLine__count {
  display: block;
  margin-top: 15px;
  margin-left: 10px;
}

.botLine__button {
  border: 1px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  color: #777;
  font-size: 14px;
}

.botLine__button:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

#${props => props.selectedButton} {
    border-color: rgba(175, 47, 47, 0.2);
}

.botLine__centralButtons {
  display: flex;
  justify-content: space-between;
}
`;