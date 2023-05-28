import { Component } from "react";
// import PropTypes from "prop-types";
// import css from './FormFeedback.module.css';

const INITIAL_STATE = {
  login: '',
  password: '',
  isAgree: false,
}
export class FormFeedback extends Component {
  state = {
    ...INITIAL_STATE,
  }

  inputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  checkboxChange = e => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitMethod(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({
      ...INITIAL_STATE
    });
  }

  render() {
    const { login, password, isAgree } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>

        <input
          onChange={this.inputChange}
          value={login}
          name="login"
          type="text" />
        
        <input
          onChange={this.inputChange}
          value={password}
          name="password"
          type="password" />
        
        <label>
          Agree with terms
          <input
            onChange={this.checkboxChange}
            checked={isAgree}
            
            name="isAgree"
            type="checkbox" />
        </label>
        
        <button disabled={!isAgree} type="submit">Submit</button>
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