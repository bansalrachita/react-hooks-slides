import React, { useReducer, useRef } from "react";
import styled from "styled-components";

const initialState = ["Hello there 👋!"];

const NotesToolBar = styled.div`
  display: flex;
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
`;

const ListItem = styled.li`
  list-style: none;
  text-align: start;
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
        <Input onChange={onChange} />
        <Button
          onClick={() => dispatch({ type: "add", note: noteRef.current })}
        >
          ➕ Add
        </Button>
        <Button onClick={() => dispatch({ type: "remove" })}>➖ Remove</Button>
      </NotesToolBar>
      <hr />
      <strong>Notes:</strong>
      <List>
        {state.map((note, idx) => (
          <ListItem>{`${idx + 1}. ${note}`}</ListItem>
        ))}
      </List>
    </>
  );
};
