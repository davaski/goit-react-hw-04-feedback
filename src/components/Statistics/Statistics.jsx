import { StatisticsContainer, StatisticsList } from './Statistics.styled';

export const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <StatisticsContainer>
      <StatisticsList>
        {options.map(([status, value]) => {
          return (
            <li key={status}>
              <p>
                {status} :<span> {value}</span>
              </p>
            </li>
          );
        })}
        <li>
          <p>
            Total: <span>{total}</span>
          </p>
        </li>
        <li>
          <p>
            Positive feedback: <span>{positivePercentage}%</span>
          </p>
        </li>
      </StatisticsList>
    </StatisticsContainer>
  );
};
