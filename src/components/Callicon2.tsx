import * as React from "react"
import { View } from "react-native"
import { G, Mask, Path, Svg } from "react-native-svg"
const CallIcon2 = (props) => (
    <View>
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={12}
      height={12}
      x={2}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path
        fill="#000"
        d="m12.814 10.179-1.693-.194a1.327 1.327 0 0 0-1.093.38L8.8 11.592a10.03 10.03 0 0 1-4.393-4.393L5.64 5.965c.287-.286.427-.686.38-1.093l-.193-1.68A1.334 1.334 0 0 0 4.5 2.012H3.348c-.754 0-1.38.627-1.334 1.38.354 5.693 4.907 10.24 10.594 10.593.753.047 1.38-.58 1.38-1.333v-1.153c.006-.674-.5-1.24-1.174-1.32Z"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#4876BA" d="M0 0h16v16H0z" />
    </G>
  </Svg>
    </View>
)
export default CallIcon2
