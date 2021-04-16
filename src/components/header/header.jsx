import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'gatsby';
import { colCn, rowCn, Container, LayoutHeader } from '@webteam/layout';
import { useTheme } from '@webteam/ui-contexts';

import styles from './header.pcss';

import { Menu } from 'src/components/menu';
import { ThemeSwitcher } from 'src/components/theme-switcher';

import logoSrc from 'src/images/logo.svg';
import darkLogoSrc from 'src/images/dark-logo.svg';

export const Header = ({ className }) => {
  const theme = useTheme();

  return (
    <LayoutHeader className={className}>
      <Container className={"stretch"}>
        <div
          className={cn(
            rowCn({ justify: 'between', alignItems: 'center' }),
            "stretch"
          )}
        >
          <div className={colCn('inline')}>
            <Link to="/" className={"logo"}>
              <img
                src={theme === 'dark' ? darkLogoSrc : logoSrc}
                alt="Ktor logo"
              />
            </Link>
          </div>
          <div className={colCn('inline')}>
            <div
              className={cn(rowCn({ alignItems: 'center' }), "stretch")}
            >
              <div className={colCn('inline')}>
                <Menu />
              </div>
              <div className={colCn('inline')}>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </LayoutHeader>
  );
};
Header.propTypes = {
  className: PropTypes.string,
};
