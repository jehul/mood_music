import React from "react";

class TestComponent extends React.Component {
  constructor(props) {
    //props are
    //C : A(param1, param2)...   <=> JS: <TestComponent param1="blah">
    super(props); //i want default methods from React.Component

    // basically just private variable
    this.state = {
      message: props.message1,
      message2: props.message2
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello Kate! I have two messages for you</h1>
        <h1> message 1 is {this.state.message} </h1>
        <h1> meesage 2 is {this.state.message2} </h1>
      </React.Fragment>
    );
  }
}

export default TestComponent;
