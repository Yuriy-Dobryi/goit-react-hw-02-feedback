import { Component } from "react";
import PropTypes from "prop-types";
import css from './Statistics.module.css';

export class FormFeedback extends Component {
  state = {
    login: '',
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const { login } = e.target.elements;
    console.log(login.value);
  }

  handleFormChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    console.log();
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input onChange={this.handleFormChange} value={this.state.login} name="login" type="text" />
        <button type="submit">Submit</button>
      </form>
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