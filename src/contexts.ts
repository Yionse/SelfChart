import {Dispatch, SetStateAction, createContext} from 'react';
import initTheme from './theme/default';
import {ThemeType} from './theme/index';

export const SetIndexContext = createContext<Function>(() => {});

export const ThemeContext = createContext<{
  themeIndex: number;
  currentTheme: ThemeType;
  setThemeIndex: Dispatch<SetStateAction<number>>;
}>(null as any);
