import { Component } from "react";
// import PropTypes from "prop-types";
// import css from './FormFeedback.module.css';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  btnClick = e => {
    const  btnName  = e.target.textContent;
    console.dir(btnName);
    this.setState({ [btnName]: 1 });
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>

        <p>Please leave feedback</p>
        <div>
          <button onClick={this.btnClick}>Good</button>
          <button onClick={this.btnClick}>Neutral</button>
          <button onClick={this.btnClick}>Bad</button>
        </div>

        <p>Statistics</p>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      </div>
    )
  }
}



// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ).isRequired
// };