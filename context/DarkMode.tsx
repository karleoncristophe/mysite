import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext<any>({});

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
interface Props {
  darkMode: boolean;
  setDarkMode: (data: boolean) => void;
}

export function useDarkMode() {
  const darkmode = useContext<Props>(DarkModeContext);
  if (!darkmode)
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  const { darkMode, setDarkMode } = darkmode;
  return { darkMode, setDarkMode };
}
