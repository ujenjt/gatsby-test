import React from 'react';
import Button from '@webteam/button';
import { useMd } from '@webteam/breakpoints';

import { useThemeSwitcher } from './theme-switcher-context';

const SunIcon = ({ className }) => (
  <svg className={className} width="24" height="24">
    <circle cx="12.03" cy="12" r="5.484" />
    <path d="M4.303 12.914H1.914a.914.914 0 110-1.828h2.39a.914.914 0 110 1.828z" />
    <path d="M22.086 12.914h-2.39a.914.914 0 110-1.828h2.39a.914.914 0 110 1.828z" />
    <path d="M12.03 23a.914.914 0 01-.914-.914v-2.39a.914.914 0 111.828 0v2.39c0 .505-.409.914-.914.914z" />
    <path d="M12.03 5.217a.914.914 0 01-.914-.914V1.914a.914.914 0 111.828 0v2.39c0 .505-.409.913-.914.913z" />
    <path d="M4.898 20.046a.914.914 0 01-.646-1.56l1.69-1.69a.914.914 0 111.292 1.292l-1.69 1.69a.911.911 0 01-.646.268z" />
    <path d="M17.473 7.472a.914.914 0 01-.646-1.56l1.69-1.69a.914.914 0 111.292 1.293l-1.69 1.69a.911.911 0 01-.646.267z" />
    <path d="M19.162 20.046a.911.911 0 01-.646-.268l-1.69-1.69a.914.914 0 111.293-1.292l1.69 1.69a.914.914 0 01-.647 1.56z" />
    <path d="M6.588 7.472a.911.911 0 01-.646-.268l-1.69-1.69a.914.914 0 111.293-1.292l1.69 1.69a.914.914 0 01-.647 1.56z" />
  </svg>
);
const MoonIcon = ({ className }) => (
  <svg className={className} width="24" height="24">
    <path
      fill="#323236"
      d="M19.476 17.59a8.062 8.062 0 01-8.062-8.061 8.04 8.04 0 013.175-6.402 8.991 8.991 0 00-1.168-.085 8.958 8.958 0 000 17.916 8.935 8.935 0 007.043-3.434c-.325.04-.653.067-.988.067z"
    />
  </svg>
);
export const ThemeSwitcher = ({ className }) => {
  const { themeId, setThemeId } = useThemeSwitcher();
  const isDarkTheme = themeId === 'dark';
  const isMd = useMd();

  return (
    <Button
      className={className}
      mode="nude"
      size={!isMd ? 'm' : 's'}
      icon={!isDarkTheme ? <MoonIcon /> : <SunIcon />}
      onClick={() => setThemeId(!isDarkTheme ? 'dark' : 'light')}
    />
  );
};
ThemeSwitcher.propTypes = {};
