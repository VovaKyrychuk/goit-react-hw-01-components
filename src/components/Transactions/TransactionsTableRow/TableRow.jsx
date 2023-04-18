import PropTypes from 'prop-types';
import { Td, LastTr } from './TableRow.styled';

export const TableRow = ({ type, amount, currency, index }) => {
  return (
    <LastTr idx={index}>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </LastTr>
  );
};

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
