import { FeedbackButton, FeedbackList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <FeedbackList>
      {options.map(elem => {
        return (
          <li key={elem}>
            <FeedbackButton type="button" onClick={() => onClick(elem)}>
              {elem}
            </FeedbackButton>
          </li>
        );
      })}
    </FeedbackList>
  );
};
