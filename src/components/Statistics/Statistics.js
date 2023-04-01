import React from 'react';
import propTypes from 'prop-types';
import css from './Statistics.module.css';
import Section from 'components/Section/Section';

const Statistics = props => {
  return (
    <Section title="Statistics">
      <div className={css.container}>
        <p className={css.paragraph}>Good: {props.good}</p>
        <p className={css.paragraph}>Neutral: {props.neutral}</p>
        <p className={css.paragraph}>Bad: {props.bad}</p>
        <p className={css.paragraph}>Total: {props.total}</p>
        <p className={css.paragraph}>
          Positive feedback: {props.positivePercentage}%
        </p>
      </div>
    </Section>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.string.isRequired,
};

export default Statistics;
