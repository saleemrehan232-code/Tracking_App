import React from "react"
import { View } from "react-native"
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

const AdminBgUp = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={360}
    height={410}
    fill="none"
    {...props}
  >
    <Rect
      width={360}
      height={448}
      x={-0.225}
      y={-38.474}
      fill="url(#a)"
      rx={20}
    />
    <Path
      fill="url(#b)"
      fillOpacity={0.95}
      d="M315.443 102.603C287.888 238.318 151.259 335.381 10.275 319.401c-140.985-15.98-232.937-138.954-205.381-274.668 27.555-135.715 164.184-232.778 305.168-216.798 140.984 15.98 232.937 138.953 205.381 274.668Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={4.5}
        x2={403.451}
        y1={410}
        y2={267.042}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#57BFEB" />
        <Stop offset={1} stopColor="#70C4A0" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={98.775}
        x2={-3.57}
        y1={-15.974}
        y2={275.178}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#56BFEE" />
        <Stop offset={1} stopColor="#476FB5" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default AdminBgUp
