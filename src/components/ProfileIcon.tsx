import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = ({ color = '#9B9B9B', width = 19, height = 20 }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 19 20"
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.584 19v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2M9.584 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </Svg>
);

export default ProfileIcon;
