import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LeavesIcon2 = ({ color = '#fff', width = 14, height = 14 }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 15 15">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 14.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 3.3v4.2l2.8 1.4"
    />
  </Svg>
);

export default LeavesIcon2;
