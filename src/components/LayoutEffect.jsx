import React from "react";
import { Card } from "../components/Card";

export const LayoutEffect = () => {
  const [count, setCount] = React.useState(0);

  React.useLayoutEffect(() => {
    if (count === 0) setCount(3.14);
  }, [count]);

  return (
    <Card
      title='useLayoutEffect'
      actionButton={
        <button onClick={() => setCount(0)}>
          <span role='img'>✨ ▶️</span>
        </button>
      }
    >
      <span role='img'>🥧</span>
      {` = ${count}`}
    </Card>
  );
};

export const UsingEffect = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (count === 0) setCount(3.14);
  }, [count]);

  return (
    <Card
      title='useEffect'
      actionButton={
        <button onClick={() => setCount(0)}>
          {count !== 0 ? (
            <span role='img '>✨</span>
          ) : (
            <span role='img'>⏱️</span>
          )}
        </button>
      }
    >
      <span role='img'>🥧</span>
      {` = ${count}`}
    </Card>
  );
};

export const UseLayoutEffect = () => {
  return (
    <>
      <h1>useEffect vs useLayoutEffect</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <UsingEffect />
        <LayoutEffect />
      </div>
    </>
  );
};
