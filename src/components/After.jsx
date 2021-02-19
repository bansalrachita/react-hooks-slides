import React, { useCallback, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const onClickDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <>
      <div>{`Counter: ${count}`}</div>
      <div>
        <button onClick={onClickDecrement} style={{ marginRight: "5px" }}>
          -
        </button>
        <button onClick={onClickIncrement}>+</button>
      </div>
    </>
  );
};
