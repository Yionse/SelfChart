import initTheme from './default';
import dark from './dark';

export type ThemeType = {
  borderColor: string;
  primaryColor: string;
  tabBarActiveColor: string;
  headerLeftBtn: string;
};

const theme = [initTheme, dark];

export default theme;
