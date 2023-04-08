import React, { createContext, useState } from 'react';

type ThemePropsType = {
  children: React.ReactNode;
};

type ContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ContextType>({
  theme: '',
  setTheme: () => undefined,
});

const Theme: React.FC<ThemePropsType> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default Theme;
