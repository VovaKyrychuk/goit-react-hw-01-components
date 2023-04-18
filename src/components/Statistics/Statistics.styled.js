import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 5px;
  max-width: 100%;
  width: 360px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: 8px;
`;

export const Title = styled.h2`
  padding: 5px;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin: 0;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3 px;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.black}; ;
`;

export const Label = styled.span`
  font-size: 16px;
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`;
