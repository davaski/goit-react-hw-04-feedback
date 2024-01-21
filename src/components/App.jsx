import { Component } from 'react';
import { SectionContainer } from './Section/Section.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, value) => (total += value),
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <SectionContainer>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onClick={this.onLeaveFeedback}
            />
          </Section>
        </SectionContainer>

        <SectionContainer>
          <Section title="Statistics">
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                options={Object.entries(this.state)}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </SectionContainer>
      </>
    );
  }
}
