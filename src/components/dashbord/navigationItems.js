import { navIcons } from 'assets/media/icons';

const phoneNav = [
  { path: '/home', icon: navIcons.NavHomeIcon },
  { path: '/diagram', icon: navIcons.NavStatisticsIcon },
  { path: '/currency', icon: navIcons.NavCurrencyIcon },
];

const elseNav = [
  { path: '/home', icon: navIcons.NavHomeIcon, value: 'Home' },
  { path: '/diagram', icon: navIcons.NavStatisticsIcon, value: 'Statistics' },
];

export const navigation = {
  phoneNav,
  elseNav,
};
