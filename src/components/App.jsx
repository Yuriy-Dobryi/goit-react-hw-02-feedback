import { Component } from "react";
import { Statistics } from './Statistics/Statistics';
// import {stats} from '../json';

export class App extends Component {

  // handleFormSubmit = data => {
  //   // console.log(data);
  // }

  render() {
    return (
      <div className='container'>
      <Statistics  />
    </div>
    )
  }
};