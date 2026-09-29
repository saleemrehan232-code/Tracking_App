import React from "react"
import { View } from "react-native"
import Svg, { Circle, Path } from 'react-native-svg';

const BtnNext1 = (props) => (
  <View>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={61}
      height={61}
      fill="none"
      {...props}
    >
      <Circle cx={30.5} cy={30.5} r={24.261} fill="#4877BA" />
      <Path
        fill="#4877BA"
        d="M30.5.804c0-.444.36-.805.804-.793a30.5 30.5 0 0 1 23.869 48.42.788.788 0 0 1-1.12.154.822.822 0 0 1-.156-1.134A28.891 28.891 0 0 0 31.304 1.619.822.822 0 0 1 30.5.804Z"
      />
      <Path
        fill="#FAFAFA"
        fillRule="evenodd"
        d="m33.072 30.008-4.16-4.16a.695.695 0 0 0-.984.984l3.674 3.668-3.667 3.667a.67.67 0 0 0-.208.492.695.695 0 0 0 1.185.492l4.16-4.159a.691.691 0 0 0 .2-.492.691.691 0 0 0-.2-.492Z"
        clipRule="evenodd"
      />
    </Svg>
  </View>

)
export default BtnNext1
