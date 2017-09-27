import { createAction } from 'redux-actions';
import {
  TOGGLE_BOXED_LAYOUT,
  TOGGLE_COLLAPSED_NAV,
  TOGGLE_NAV_BEHIND,
  TOGGLE_FIXED_HEADER,
  CHANGE_SIDEBAR_WIDTH,
  CHANGE_COLOR_OPTION,
  CHANGE_THEME,
} from '../constants';

export const toggleBoxedLayout = createAction(TOGGLE_BOXED_LAYOUT);
export const toggleCollapsedNav = createAction(TOGGLE_COLLAPSED_NAV);
export const toggleNavBehind = createAction(TOGGLE_NAV_BEHIND);
export const toggleFixedHeader = createAction(TOGGLE_FIXED_HEADER);
export const changeSidebarWidth = createAction(CHANGE_SIDEBAR_WIDTH);
export const changeColorOption = createAction(CHANGE_COLOR_OPTION);
export const changeTheme = createAction(CHANGE_THEME);
