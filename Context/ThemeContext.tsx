import React, { createContext, useState } from 'react';

export const ThemeContext = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({
  theme: '',
  setTheme: () => undefined,
});

type ThemePropsType = {
  children: React.ReactNode;
};

type ContextType = {
  theme: string;
  setTheme: () => void;
};
const Theme: React.FC<ThemePropsType> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default Theme;
