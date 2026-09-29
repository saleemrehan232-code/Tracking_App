import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const CalenderIcon = ({ color = '#9B9B9B', width = 22, height = 21 }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 22 21"
  >
    <Rect
      width={18.281}
      height={15.898}
      x={1.86}
      y={4.06}
      stroke={color}
      strokeWidth={2}
      rx={3}
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.161 1.977v4.166M13.63 1.977v4.166"
    />
    <Path
      fill={color}
      d="M2 9h19.167c0 .92-.746 1.667-1.666 1.667H3.667c-.92 0-1.666-.747-1.666-1.667Z"
    />
  </Svg>
);

export default CalenderIcon;
