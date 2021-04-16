import React, { useState, useCallback, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import cn from 'classnames';
import { Link } from 'gatsby';
import Button from '@webteam/button';
import { HamburgerIcon } from '@webteam/icons';

import { Drawer } from 'src/components/drawer';
import logo from 'src/images/logo.svg';
import darkLogo from 'src/images/dark-logo.svg';

import './menu.pcss';
import './mobile-menu.pcss';
import menuData from './menu-data';
import { MenuItem } from './menu-item';
import { useTheme } from '@webteam/ui-contexts';

const Portal = ({ children, target }) =>
  ReactDOM.createPortal(children, target);

export const MobileMenu = () => {
  const theme = useTheme();
  const [isDrawerOpened, setDrawerOpened] = useState(false);
  const [nodeToRenderMobileMenu, setNodeToRenderMobileMenu] = useState(null);
  useEffect(() => {
    setNodeToRenderMobileMenu(document.body);
  }, []);

  const onLinkClick = useCallback(() => {
    setDrawerOpened(false);
  }, []);

  return (
    <>
      <Button
        icon={<HamburgerIcon />}
        size="s"
        mode="nude"
        onClick={() => setDrawerOpened(true)}
      />
      {nodeToRenderMobileMenu && (
        <Portal target={nodeToRenderMobileMenu}>
          <Drawer
            As="nav"
            placement="right"
            className={"drawer"}
            isOpened={isDrawerOpened}
            setOpened={setDrawerOpened}
            zIndex={15}
            maskZIndex={14}
          >
            <ul className={cn("ul")}>
              <li className={"item"}>
                <Link to="/" onClick={onLinkClick}>
                  <img
                    src={theme === 'dark' ? darkLogo : logo}
                    alt="Ktor logo"
                    className={"logo"}
                  />
                </Link>
              </li>
              {menuData.map(({ id, isExternal, content, href }) => (
                <MenuItem
                  As="li"
                  key={id}
                  href={href}
                  isExternal={isExternal}
                  className={"item"}
                  onClick={onLinkClick}
                >
                  {content}
                </MenuItem>
              ))}
            </ul>
          </Drawer>
        </Portal>
      )}
    </>
  );
};
