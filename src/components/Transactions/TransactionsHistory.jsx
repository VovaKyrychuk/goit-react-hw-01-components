import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  LastTr,
} from './TransactionsHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {items.map((item, idx) => {
          return (
            <TableRow
              key={item.id}
              id={item.id}
              type={item.type}
              currency={item.currency}
              amount={item.amount}
              index={idx}
            />
          );
        })}
      </Tbody>
    </Table>
  );
};

const TableRow = ({ type, amount, currency, index }) => {
  return (
    <LastTr idx={index}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </LastTr>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
