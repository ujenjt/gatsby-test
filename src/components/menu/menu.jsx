import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { colCn, rowCn } from '@webteam/layout';
import { useMd } from '@webteam/breakpoints';

import styles from './menu.pcss';
import menuData from './menu-data';
import { MenuItem } from './menu-item';
import { MobileMenu } from './mobile-menu';

export const Menu = ({ className }) => {
  const isMd = useMd();

  return (
    <div className={className}>
      {!isMd ? (
        <nav>
          <ul className={cn(rowCn(), "ul")}>
            {menuData.map(({ id, isExternal, content, href }) => (
              <MenuItem
                As="li"
                key={id}
                className={colCn('inline')}
                href={href}
                isExternal={isExternal}
                linkClassName={"insideHorizontalMenu"}
              >
                {content}
              </MenuItem>
            ))}
          </ul>
        </nav>
      ) : (
        <MobileMenu />
      )}
    </div>
  );
};
Menu.propTypes = {
  className: PropTypes.string,
};
