import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '@webteam/button';
import { CloseIcon, HamburgerIcon } from '@webteam/icons';

import styles from './drawer.pcss';

const AVAILABLE_PLACEMENT = { left: 'left', right: 'right' };
const DEFAULT_SIDE = AVAILABLE_PLACEMENT.left;

export const Drawer = ({
  As = 'div',
  children,
  placement = DEFAULT_SIDE,
  isOpened = false,
  setOpened = () => {},
  className,
  zIndex = 5,
  maskZIndex = 4,
}) => {
  const resolvedPlacement =
    placement in AVAILABLE_PLACEMENT ? placement : DEFAULT_SIDE;

  return (
    <>
      <As
        className={cn(
          "drawer",
          styles[resolvedPlacement],
          isOpened && "opened",
          className
        )}
        style={{ zIndex }}
      >
        <div
          className={cn("button", 'wt-display-none wt-display-lg-block')}
        >
          {!isOpened ? (
            <Button
              icon={<HamburgerIcon />}
              size="s"
              mode="nude"
              onClick={() => setOpened(true)}
            />
          ) : (
            <Button
              icon={<CloseIcon />}
              size="s"
              mode="nude"
              onClick={() => setOpened(false)}
            />
          )}
        </div>
        <div className={"dcontent"}>{children}</div>
      </As>
      {isOpened && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
          className={"mask"}
          style={{ zIndex: maskZIndex }}
          onClick={() => setOpened(false)}
        />
      )}
    </>
  );
};
Drawer.propTypes = {
  As: PropTypes.elementType,
  className: PropTypes.string,
  placement: PropTypes.oneOf(['left', 'right']),
  isOpened: PropTypes.bool,
  setOpened: PropTypes.func,
  zIndex: PropTypes.number,
  maskZIndex: PropTypes.number,
  children: PropTypes.node,
};
