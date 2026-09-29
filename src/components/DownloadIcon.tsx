import React from 'react';
import { Svg, Path } from 'react-native-svg';

const DownloadIcon = ({ color = '#000', width = 22, height = 21, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 7.667v2.222a1.111 1.111 0 0 1-1.111 1.11H2.11A1.111 1.111 0 0 1 1 9.89V7.667M3.222 4.889 6 7.667l2.778-2.778M6 7.667V1"
    />
  </Svg>
);

export default DownloadIcon;
