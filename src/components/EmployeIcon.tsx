import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const EmployeIcon = (props) => (
    <View>
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    style={{
      enableBackground: "new 0 0 34 29",
    }}
    viewBox="0 0 34 29"
    {...props}
  >
    <style>
      {
        ".st0{fill:none;stroke:#fff;stroke-width:1.7996;stroke-linecap:round;stroke-linejoin:round}"
      }
    </style>
    <Path
      d="M31.7 22.4v-4.8a2.732 2.732 0 0 0-2.7-2.7h-4.8c-.7 0-1.4.3-1.9.8M26.6 12.2c1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7-1.5 0-2.7 1.2-2.7 2.7 0 1.4 1.2 2.7 2.7 2.7zM11.7 15.7c-.5-.5-1.2-.8-1.9-.8H5a2.732 2.732 0 0 0-2.7 2.7v4.8M7.4 12.2c1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7-1.5 0-2.7 1.2-2.7 2.7-.1 1.4 1.2 2.7 2.7 2.7z"
      className="st0"
    />
    <Path
      d="M24.5 25.7v-6.5c0-1.1-.4-2.1-1.2-2.8-.8-.7-1.8-1.2-2.8-1.2h-7c-1.1 0-2.1.4-2.8 1.2-.7.8-1.2 1.8-1.2 2.8v6.5M17 11.3c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z"
      className="st0"
    />
  </Svg>
    </View>

)
export default EmployeIcon
