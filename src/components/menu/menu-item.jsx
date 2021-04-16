import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import cn from 'classnames';

import './menu.pcss';

export const MenuItem = ({
  As = 'div',
  href,
  isExternal = false,
  onClick = () => {},
  className,
  linkClassName,
  children,
}) => {
  const title = typeof children === 'string' ? children : '';

  return (
    <As className={className}>
      {isExternal ? (
        <a
          href={href}
          className={cn("link", linkClassName)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          title={title}
        >
          {children}
        </a>
      ) : (
        <Link
          to={href}
          className={cn("link", linkClassName)}
          activeClassName={"linkActive"}
          onClick={onClick}
          title={title}
        >
          {children}
        </Link>
      )}
    </As>
  );
};
MenuItem.propTypes = {
  As: PropTypes.elementType,
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  linkClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};
