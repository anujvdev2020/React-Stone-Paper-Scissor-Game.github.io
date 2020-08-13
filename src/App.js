import React from "react";
import "./styles.css";
import User from "./User";

let ComputerC = "";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.getComputer = this.getComputer.bind(this);
    this.state = { user: "Paper" };
    this.changeAnswer = this.changeAnswer.bind(this);
    this.calculateResult=this.calculateResult.bind(this);
  }

  getComputer() {
    let compAns = ["Stone", "Paper", "Scissor"];
    ComputerC = compAns[Math.floor(Math.random() * 3)];
    return ComputerC;
  }

  changeAnswer(option) {
    this.setState({ user: option });
  }
  calculateResult() {
    let op1 = ComputerC;
    let op2 = this.state.user;
    if (op1 === op2) {
      return "Its a Tie";
    } else if (op1 === "Stone" && op2 === "Paper") {
      return "Computer Wins";
    } else if (op1 === "Paper" && op2 === "Stone") {
      return "User Wins";
    } else if (op1 === "Stone" && op2 === "Scissor") {
      return "Computer Wins";
    } else if (op1 === "Scissor" && op2 === "Stone") {
      return "User Wins";
    } else if (op1 === "Scissor" && op2 === "Paper") {
      return "Computer Wins";
    } else if (op1 === "Paper" && op2 === "Scissor") {
      return "User Wins";
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Computer Choice is {this.getComputer()}</h1>
        <User onChange={this.changeAnswer} />
        <h1>User Choice is {this.state.user}</h1>
      <h1>{this.calculateResult()}</h1>

      </div>
    );
  }
}
