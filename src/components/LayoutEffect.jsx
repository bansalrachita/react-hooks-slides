import React from "react";
import { Card } from "../components/Card";
import { Heading } from "./Heading";

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
          <span role='img'>▶️</span>
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
            <span role='img '>▶️</span>
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
      <Heading>useEffect vs useLayoutEffect</Heading>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <UsingEffect />
        <LayoutEffect />
      </div>
    </>
  );
};
