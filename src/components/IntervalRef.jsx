import React, { useState, useEffect, useRef, useCallback } from "react";

const delay = 1000;

const IntervalRef = ({ setClean, setCount, count }) => {
  const callbackRef = useRef();
  // Stores the interval Id;
  const intervalIdRef = useRef();

  useEffect(() => {
    // Runs after every render and updates the ref with new count
    callbackRef.current = () => setCount(count + 1);

    // Starts setInterval
    if (count === 0) {
      intervalIdRef.current = setInterval(() => callbackRef.current(), delay);
    }
  }, [count, setCount]);

  //Similar to ComponnentDidMount
  useEffect(() => {
    // Similar to ComponentWillunmount
    return () => {
      // Runs cleanup function
      setClean(true);
      clearInterval(intervalIdRef.current);
    };
  }, [setClean]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export const Example = () => {
  const [cleaned, setClean] = useState(false);
  const [count, setCount] = useState();

  const onClick = useCallback(() => {
    setClean(false);
    setCount(0);
  }, []);

  const onClickReset = useCallback(() => {
    setCount(undefined);
  }, []);

  return (
    <>
      <button onClick={onClick} style={{ marginRight: "5px" }}>
        Start
      </button>
      <button onClick={onClickReset}>Reset</button>
      {cleaned && <p>Cleanup successful</p>}
      {count !== undefined && (
        <IntervalRef setClean={setClean} setCount={setCount} count={count} />
      )}
    </>
  );
};
