import React, { useState } from "react";
import { Card } from "./Card";
import styled from "styled-components";
// import { useRenderCount } from "../hooks/useRenderCount";

export const CardWithoutCallback = () => {
  const [, setVal] = useState(0);

  const setter = () => {
    setVal(Math.random() * 1);
  };

  return <WrappedCard title='Non-callback Card' text='👻' fn={setter} />;
};

export const CardWithCallback = () => {
  const [, setVal] = useState(0);

  const setter = React.useCallback(() => {
    setVal(Math.random() * 1);
  }, []);

  return <WrappedCard text='👽' title='Callback Card' fn={setter} />;
};

const WrappedCard = ({ fn, title, text }) => {
  //   const count = useRenderCount();

  return (
    <>
      {/* <Counter>{count}</Counter> */}
      <Card title={title} actionButton={<button onClick={fn}>{text}</button>} />
    </>
  );
};

// const PureCard = React.memo(({ fn, title, text }) => {
//   const count = useRenderCount();

//   return (
//     <>
//       <Counter>{count}</Counter>
//       <Card title={title} actionButton={<button onClick={fn}>{text}</button>} />
//     </>
//   );
// });

// const Counter = styled.p`
//   position: absolute;
//   right: -8px;
//   top: -24px;
//   color: rgba(255, 255, 255, 0.7);
//   background-color: salmon;
//   border-radius: 50%;
//   padding: 0 6px;
//   font-size: 18px;
//   font-weight: 600;
// `;
