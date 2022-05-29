import { Dimensions } from 'react-native';

export const BASE_URL = `https://budgetly-mobile-app.herokuapp.com/`;

export const skeletonArray = Array.from(Array(5).keys());

export const chipColors = [
  '#D5F3D6',
  '#FEE99C',
  '#B2F5FE',
  '#06B3C4',
  '#FBD5EF',
];

export const monthList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
