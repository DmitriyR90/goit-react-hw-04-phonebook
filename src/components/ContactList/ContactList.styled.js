import styled from 'styled-components';

export const ContactSection = styled.ul`
  width: 300px;
  margin: 0;
`;

export const ContactItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
