import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

// ThemeProvider basically just wraps the application providing context to the entire app, then we use that context in the app.
// when we use that context, it gives us access to the value that the provoder provides us with
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: '#58249C',
    mode: 'dark',
  });

  const changeColor = (color) => {
    //   the type of dispatch we want to make, the type of state change
    // the payload is any data we want to base the state change on
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
