import React from "react"
import { View } from "react-native"
import Svg, {Rect } from 'react-native-svg';

const SliderOnboarding1 = (props) => (
  <View>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={5}
      fill="none"
      {...props}
    >
      <Rect width={30} height={5} fill="#4877BA" rx={2.5} />
      <Rect
        width={10}
        height={5}
        x={35}
        fill="#567DF4"
        fillOpacity={0.2}
        rx={2.5}
      />
      <Rect
        width={10}
        height={5}
        x={50}
        fill="#567DF4"
        fillOpacity={0.2}
        rx={2.5}
      />
    </Svg>
  </View>

)
export default SliderOnboarding1
