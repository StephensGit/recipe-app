import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  // returns whatever the value prop is
  const context = useContext(ThemeContext);

  //  it will be undefined if used outside of the scope of the components we wrapped
  if (context === 'undefined') {
    throw new Error('useTheme() must be used within a ThemeProvider');
  }
  return context;
};
