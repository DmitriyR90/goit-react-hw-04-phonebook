import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrap = styled(Form)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 6px;
  width: 300px;
  padding: 16px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const FormFeld = styled(Field)`
  font-size: 18px;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 2px 4px;
`;

export const FormLabel = styled.label`
  display: flex;
  gap: 8px;
  font-size: 20px;
  flex-direction: column;
`;

export const FormButton = styled.button`
  cursor: pointer;
  width: fit-content;
  padding: 4px 12px;
  background-color: #fff;
  font-size: 14px;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  &:hover,
  :focus {
    background-color: rgb(0 145 188);
  }
`;

export const ErrorMsg = styled.div`
  font-size: 14px;
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  padding: 0.5rem 0.75rem;
  white-space: pre-line;
  border-radius: 4px;
`;
