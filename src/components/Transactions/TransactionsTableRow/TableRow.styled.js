import styled from 'styled-components';

export const Td = styled.td`
  padding-left: 5px;
  :hover {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.accent};
  }
`;

export const Tr = styled.tr`
font-size: 16px;
:nth-child(even) {
    background-color: ${props => props.theme.colors.gray};
  }
  :hover {
   background-color: ${props => props.theme.colors.background};
`;

export const LastTr = styled(Tr)`
  background-color: ${props => props.theme.colors.white};
`;
