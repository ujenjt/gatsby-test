import React, { useContext, useState } from 'react';

export const DEFAULT_THEME = 'light';

const ThemeSwitcherContext = React.createContext(undefined);

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

  if (typeof context === 'undefined') {
    throw new Error('ThemeContext must be used within a ThemeContext provider');
  }

  return context;
};
