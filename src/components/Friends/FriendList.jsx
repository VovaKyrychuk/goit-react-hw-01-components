import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendsItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </FriendsList>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
