import React, { useCallback, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <>
      <div>{`Counter: ${count}`}</div>
      <div>
        <button onClick={increment} style={{ marginRight: "5px" }}>
          ➕ Increment
        </button>
        <button onClick={decrement}>➖ Decrement</button>
      </div>
    </>
  );
};
