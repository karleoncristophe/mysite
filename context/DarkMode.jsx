import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const darkmode = useContext(DarkModeContext);
  if (!darkmode)
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  const { darkMode, setDarkMode } = darkmode;
  return { darkMode, setDarkMode };
}
