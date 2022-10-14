import styled from 'styled-components';

export const ContactWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactBtn = styled.button`
  cursor: pointer;
  width: fit-content;
  padding: 4px 8px;
  background-color: #fff;
  font-size: 12px;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  &:hover,
  :focus {
    background-color: rgb(0 145 188);
  }
`;
