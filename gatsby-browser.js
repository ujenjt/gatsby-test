/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { ThemeProvider } from '@webteam/ui-contexts';

import { ThemeSwitcherProvider } from 'src/components/theme-switcher';

// You can delete this file if you're not using it

export const onClientEntry = () => {
  require('@webteam/layout/lib/webpack-autoload');
};

export const wrapPageElement = ({ element }) => (
  <ThemeSwitcherProvider>
    {(currentTheme) => (
      <ThemeProvider theme={currentTheme}>{element}</ThemeProvider>
    )}
  </ThemeSwitcherProvider>
);
