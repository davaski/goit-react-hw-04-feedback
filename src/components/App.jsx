import { Component } from 'react';
import { SectionContainer } from './Section/Section.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';
export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    const obj = {
      good: () => setGood(prevState => prevState + 1),
      neutral: () => setNeutral(prevState => prevState + 1),
      bad: () => setBad(prevState => prevState + 1),
    };
    return obj[option]();
  };

  const countTotalFeedback = () => {
    return Object.values({ good, neutral, bad }).reduce(
      (total, value) => (total += value),
      0
    );
  };

  const countPositiveFeedbackPercentage = () => {
    return `${Math.ceil((good / countTotalFeedback()) * 100)}`;
  };

  return (
    <div>
      <SectionContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onClick={onLeaveFeedback}
          />
        </Section>
      </SectionContainer>

      <SectionContainer>
        <Section title="Statistics">
          {!countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              options={Object.entries({ good, neutral, bad })}
              total={countTotalFeedback()}
              positivePercentage={
                !countTotalFeedback() ? 0 : countPositiveFeedbackPercentage()
              }
            />
          )}
        </Section>
      </SectionContainer>
    </div>
  );
}
