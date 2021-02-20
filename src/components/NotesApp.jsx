import React, { useReducer, useRef } from "react";
import styled from "styled-components";

const initialState = ["Hello there 👋!", "Add more notes below."];

const NotesToolBar = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Input = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  margin-right: 5px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 100%;
  overflow: hidden;
`;

const ListItem = styled.li`
  list-style: none;
  text-align: start;
  font-size: 14px;
`;

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.note];
    case "remove":
      return state?.slice(0, state?.length - 1);
    default:
      return state;
  }
}

export const NotesApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const noteRef = useRef();

  const onChange = (e) => {
    noteRef.current = e.target.value;
  };

  return (
    <>
      <NotesToolBar>
        <Input onChange={onChange} style={{ height: "30px", width: "130px" }} />
        <Button
          onClick={() => dispatch({ type: "add", note: noteRef.current })}
        >
          <span>➕ Add</span>
        </Button>
        <Button onClick={() => dispatch({ type: "remove" })}>
          <span>➖ Remove</span>
        </Button>
      </NotesToolBar>
      <hr />
      <strong>Notes:</strong>
      <List>
        {state.map((note, idx) => (
          <ListItem key={`notes-app-${idx}`}>{`${idx + 1}. ${note}`}</ListItem>
        ))}
      </List>
    </>
  );
};
