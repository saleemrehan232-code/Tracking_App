import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"

const CheckInIcon = (props) => (
  <View>
 <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    fill="none"
    {...props}
  >
    <Rect width={31} height={31} fill="#4876BA" rx={4} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.167 16.278v4.666A1.556 1.556 0 0 1 18.61 22.5h-8.555A1.556 1.556 0 0 1 8.5 20.944V12.39a1.555 1.555 0 0 1 1.556-1.556h4.666M17.834 8.5H22.5v4.667M13.944 17.056 22.5 8.5"
    />
  </Svg>
  </View>
 
)
export default CheckInIcon
