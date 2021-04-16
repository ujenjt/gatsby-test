import React, { useContext, useState } from 'react';

export const DEFAULT_THEME = 'light';

const ThemeSwitcherContext = React.createContext({
  themeId: DEFAULT_THEME,
  setThemeId: () => {
    console.warn("attemp to switch theme outside of a ThemeContext provider")
  }
});

export const ThemeSwitcherProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(DEFAULT_THEME);

  return (
    <ThemeSwitcherContext.Provider value={{ themeId, setThemeId }}>
      {children(themeId)}
    </ThemeSwitcherContext.Provider>
  );
};

export const useThemeSwitcher = () => {
  const context = useContext(ThemeSwitcherContext);
  return context;
};
