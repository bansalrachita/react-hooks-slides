import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div>{`Count: ${count}`}</div>
        <button onClick={this.handleClick}>+</button>
      </>
    );
  }
}

export default Counter;
