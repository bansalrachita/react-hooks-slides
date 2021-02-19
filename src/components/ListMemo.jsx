import React, { useMemo, useState } from "react";
import styled from "styled-components";

export const data = [
  "Mount Everest",
  "K2",
  "Kangchenjunga",
  "Lhotse",
  "Makalu",
  "Cho Oyu",
  "Dhaulagiri",
  "Manaslu",
  "Nanga Parbat",
  "Annapurna",
  "Gasherbrum I",
  "Broad Peak",
  "Gasherbrum II",
  "Shishapangma",
];

export const ListMemo = ({ data }) => {
  const [inputText, setInputText] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const searchResults = useMemo(
    () =>
      data.filter((d) => {
        const regex = new RegExp(`${searchInput}`, "i");
        console.log("Filter function is running ...");
        return d.search(regex) !== -1;
      }),
    [searchInput, data]
  );

  const onClick = () => {
    setSearchInput(inputText);
  };

  return (
    <>
      <input value={inputText} onChange={onChangeInput}></input>
      <Button onClick={onClick}>Search 🔍</Button>
      <hr />
      <List>
        {searchResults.map((result, index) => (
          <ListItem key={`mt-${index}`}>{result}</ListItem>
        ))}
      </List>
    </>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const ListItem = styled.li`
  list-style: none;
`;
const Button = styled.button`
  margin: 0 5px;
`;
