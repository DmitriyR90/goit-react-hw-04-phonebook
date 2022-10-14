import { Field } from 'formik';
import styled from 'styled-components';

export const FilterWrap = styled.div`
  width: 300px;
  padding: 16px;
  /* margin-top: 8px;
  margin-bottom: 8px; */
`;

export const Title = styled.p`
  margin: 0;
  margin-bottom: 8px;
`;

export const FilterInput = styled(Field)`
  width: 100%;
  font-size: 18px;
  border: 1px solid grey;
  border-radius: 4px;
`;
