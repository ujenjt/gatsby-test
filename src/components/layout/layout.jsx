/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { LayoutContent, Layout as LayoutWrapper } from '@webteam/layout';
import FocusManager from '@webteam/focus-manager';
import { useTheme } from '@webteam/ui-contexts';
import Helmet from 'react-helmet';
import '@webteam/layout/lib/styles';
import '@webteam/colors/lib/index.css';
import '@webteam/typography/lib/styles';
import 'reset.css/reset.css';

import './layout.pcss';
import 'src/styles/global.pcss';

import { Header } from 'src/components/header';

const Layout = ({ className, children }) => {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new FocusManager();
  }, []);
  const theme = useTheme();

  return (
    <LayoutWrapper className={"layout"}>
      <Helmet
        bodyAttributes={{
          class: `ktor-site ktor-site_theme_${theme}`,
        }}
      />
      <Header className={"header"} />
      <LayoutContent className={cn("content", className)}>
        {children}
      </LayoutContent>
    </LayoutWrapper>
  );
};
Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
