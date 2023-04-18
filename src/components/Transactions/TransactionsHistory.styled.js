import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: 5px;
  padding: 5px;
  max-width: 90%;
  width: 90%;
`;

export const Thead = styled.thead`
  background-color: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.accent};
  font-size: 24px;
  text-transform: uppercase;
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

export const Th = styled.th`
  padding: 0.5rem 0;
  padding-left: 5px;
  text-align: left;
`;

export const Tbody = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`;

export const Td = styled.td`
  padding-left: 5px;
  :hover {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.accent};
  }
`;
