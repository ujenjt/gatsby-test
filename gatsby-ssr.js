/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import {
  production,
  development
} from '@webteam/typography/lib/fonts-urls.json';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key={'fonts-css'}
      rel="stylesheet"
      href={process.env.NODE_ENV === 'production' ? production : development}
    />
  ]);
};
