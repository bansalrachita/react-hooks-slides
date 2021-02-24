import React, { useContext, useState } from "react";
import styled from "styled-components";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const Label = styled.label`
  font-size: 12px;
`;

const ThemeContext = React.createContext(themes.light);

export const UsingContext = () => {
  const [theme, setTheme] = useState(themes.light);

  const handleThemeChange = () => {
    Object.is(theme, themes.light)
      ? setTheme(themes.dark)
      : setTheme(themes.light);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <input id='theme' type='checkbox' onClick={handleThemeChange} />
        <Label htmlFor='theme'> Change theme </Label>
      </div>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};

const ThemedButton = () => {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
};
