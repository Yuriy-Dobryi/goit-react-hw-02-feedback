import PropTypes from "prop-types";
import css from './Statistics.module.css';

export const Statistics = (statistics) => (
    <div>
    {Object.keys(statistics).map((name, index) => (
      <p key={index}>{name}: {statistics[name]}</p>
      ))}
    </div>
  )

  
  // export const Statistics =
  // ({ good, neutral, bad, total, positivePercentage }) => (
  //   <div>
  //     <p>Good: {good}</p>
  //     <p>Neutral: {neutral}</p>
  //     <p>Bad: {bad}</p>
  //     <p>Total: {total}</p>
  //     <p>Positive: {positivePercentage}%</p>
  //   </div>
  // )