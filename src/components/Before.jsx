import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onClickIncrement = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  onClickDecrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div>{`Count: ${count}`}</div>
        <div>
          <button onClick={this.onClickDecrement}>-</button>
          <button onClick={this.onClickIncrement}>+</button>
        </div>
      </>
    );
  }
}

export default Counter;
