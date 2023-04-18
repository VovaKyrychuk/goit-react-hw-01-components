import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './Statistics.styled';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map((item, idx) => (
          <StatListItem
            key={item.id}
            id={item.id}
            index={idx}
            bgColor={getRandomColor()}
          >
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
