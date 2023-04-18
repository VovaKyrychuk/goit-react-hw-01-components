import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  margin-bottom: 5px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
  margin: 0 auto;
  padding: 3px;
  max-width: 100%;
  width: 360px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background};
`;

export const Status = styled.span`
  display: block;
  margin-left: 26px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.white};

  &:hover {
    background: ${props => props.theme.colors.black};
  }
`;

export const Name = styled.p`
  margin-left: 10px;
  color: ${props => props.theme.colors.accent};
  font-size: 16px;
  font-weight: 700;
`;
