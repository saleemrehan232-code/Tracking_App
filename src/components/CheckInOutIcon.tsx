import React from 'react';
import Svg, { Path } from 'react-native-svg';
const CheckInOutIcon = ({ color = '#fff', width = 20, height = 22 }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 21 25">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.48 21.63a2.75 2.75 0 0 1 2.75-2.75h14.85"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M4.67 1.5h14.85v22H4.67a2.75 2.75 0 0 1-2.75-2.75V4.25A2.75 2.75 0 0 1 4.67 1.5Z"
    />
  </Svg>
);

export default CheckInOutIcon;
