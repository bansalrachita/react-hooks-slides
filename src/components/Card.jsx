import * as React from "react";
import styled from "styled-components";

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightcoral;
  border-radius: 3px;
  width: 150px;
  margin: 5px;
  padding: 10px;

  > div:first-child {
    display: flex;
    flex-direction: column;
    height: 100px;

    p:first-child {
      font-size: 18px;
      height: 21px;
      width: 100%;
      padding-top: 2px;

      margin: 0;
      border-radius: 2px 2px 0 0;
      color: lightcoral;
    }

    ,
    > p:second-child {
      font-weight: 600;
      text-align: center;
      margin-top: auto;
      color: rgba(0, 0, 0, 0.7);
      font-size: 22px;
    }
  }

  > div:second-child {
    width: 100%;
    * {
      width: inherit;
    }
  }
`;
export const Card = ({ title, actionButton, children }) => {
  return (
    <>
      <CardSection>
        <div>
          <p>{title}</p>
          <p>{children}</p>
        </div>
        <div>{actionButton}</div>
      </CardSection>
    </>
  );
};
