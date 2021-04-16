import React from 'react';
import { GitHubIcon, TwitterIcon, MegaphoneIcon } from '@webteam/icons';

export default [
  {
    id: 'learn',
    isExternal: false,
    content: 'Learn',
    href: '/learn/',
  },
  // {
  //   id: 'whatsnew',
  //   isExternal: false,
  //   content: 'What’s new',
  //   href: '/whatsnew/',
  // },
  {
    id: 'download',
    isExternal: false,
    content: 'Download',
    href: '/download/',
  },
  {
    id: 'support',
    isExternal: false,
    content: 'Support',
    href: '/support/',
  },
  {
    id: 'github',
    isExternal: true,
    content: <GitHubIcon />,
    href: 'https://github.com/ktorio/ktor',
  },
  {
    id: 'twitter',
    isExternal: true,
    content: <TwitterIcon />,
    href: 'https://twitter.com/jetbrainsktor',
  },
  {
    id: 'blog',
    isExternal: true,
    content: <MegaphoneIcon />,
    href: 'https://blog.jetbrains.com/ktor/',
  },
];
