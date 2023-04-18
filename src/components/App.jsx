import { GlobalStyle } from './GlobalStyle';

import user from './Profile/user.json';
import { Profile } from './Profile/Profile';

import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from './Friends/friends.json';
import { FriendList } from './Friends/FriendList/FriendList';

import transactions from './Transactions/transactions.json';
import { TransactionHistory } from './Transactions/TransactionsHistory/TransactionsHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
