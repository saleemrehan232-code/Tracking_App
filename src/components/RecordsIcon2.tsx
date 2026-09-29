import React from 'react';
import Svg, { Path } from 'react-native-svg';

const RecordsIcon2 = ({ color = '#fff', width = 14, height = 15 }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 14 15">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.4.5H2.8a1.4 1.4 0 0 0-1.4 1.4v11.2a1.4 1.4 0 0 0 1.4 1.4h8.4a1.4 1.4 0 0 0 1.4-1.4V4.7L8.4.5Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.4.5v4.2h4.2M9.8 8.2H4.2M9.8 11H4.2M5.6 5.4H4.2"
    />
  </Svg>
);

export default RecordsIcon2;
