import initTheme from './default';
import dark from './dark';

export type ThemeType = {
  borderColor: string;
  primaryColor: string;
  tabBarActiveColor: string;
  headerLeftBtn: string;
  chartBorderBottomColor: string;
  meMessageBackgroundColor: string;
  otherMessageBackgroundColor: string;
};

const theme = [initTheme, dark];

export default theme;
