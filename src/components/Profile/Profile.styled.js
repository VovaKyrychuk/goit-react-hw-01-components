import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${props => props.theme.colors.background};
  max-width: 100%;
  width: 380px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 5px;
`;

export const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;

  &:hover {
    background: ${props => props.theme.colors.white};
  }
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.accent};
  font-size: 32px;
  font-weight: 500;
`;

export const Tag = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 16px;
  font-weight: 500;
`;

export const Location = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 16px;
  font-weight: 500;
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
`;

export const Label = styled.span`
  margin: 0px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 400;
`;

export const Quantity = styled.span`
  margin: 0px 5px;
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  color: ${props => props.theme.colors.secondary};
  text-shadow: 1px 1px 1px #fff;
  font-weight: 700;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 4 px;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  &:hover {
    background: ${props => props.theme.colors.white};
  }
`;
