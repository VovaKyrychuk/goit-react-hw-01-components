import PropTypes from 'prop-types';
import { FriendsItem, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
