import APPCONFIG from 'constants/Config';
import generateHandleActions from '../state-handler';
import {
  TOGGLE_BOXED_LAYOUT,
  TOGGLE_COLLAPSED_NAV,
  TOGGLE_NAV_BEHIND,
  TOGGLE_FIXED_HEADER,
  CHANGE_SIDEBAR_WIDTH,
  CHANGE_COLOR_OPTION,
  CHANGE_THEME
} from '../constants';

const initialSettings = APPCONFIG.settings;

const apiStates = [];

const instantStates = [
  { type: TOGGLE_BOXED_LAYOUT, name: 'layoutBoxed', defaultValue: initialSettings.layoutBoxed },
  { type: TOGGLE_COLLAPSED_NAV, name: 'navCollapsed', defaultValue: initialSettings.navCollapsed },
  { type: TOGGLE_NAV_BEHIND, name: 'navBehind', defaultValue: initialSettings.navBehind },
  { type: TOGGLE_FIXED_HEADER, name: 'fixedHeader', defaultValue: initialSettings.fixedHeader },
  { type: CHANGE_SIDEBAR_WIDTH, name: 'sidebarWidth', defaultValue: initialSettings.sidebarWidth },
  { type: CHANGE_COLOR_OPTION, name: 'colorOption', defaultValue: initialSettings.colorOption },
  { type: CHANGE_THEME, name: 'theme', defaultValue: initialSettings.theme },
];

export default generateHandleActions({ apiStates, instantStates });
