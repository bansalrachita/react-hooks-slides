import React, { useState } from "react";

export const CardWithoutCallback = () => {
  const [val, setVal] = useState(0);
  const setter = () => {
    setVal(Math.random() * 1);
  };

  return <PureCard title='Non-callback Card' text='👻' fn={setter} />;
};

export const CardWithCallback = () => {
  const [val, setVal] = useState(0);
  const setter = React.useCallback(() => {
    setVal(Math.random() * 1);
  }, []);

  return <PureCard text='👽' title='Callback Card' fn={setter} />;
};

const Card = ({ fn, title, text }) => {
  return (
    <Card
      title={title}
      enableRenderCount={true}
      actionButton={<button onClick={fn}>{text}</button>}
    />
  );
};

const PureCard = React.memo(({ fn, title, text }) => {
  return (
    <Card
      title={title}
      enableRenderCount={true}
      actionButton={<button onClick={fn}>{text}</button>}
    />
  );
});
