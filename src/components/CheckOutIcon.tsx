import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const CheckOutIcon = (props) => (
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
        d="M10.833 14.722v-4.666A1.556 1.556 0 0 1 12.39 8.5h8.555a1.556 1.556 0 0 1 1.556 1.556v8.555a1.555 1.555 0 0 1-1.556 1.556h-4.666M13.166 22.5H8.5v-4.667M17.056 13.944 8.5 22.5"
      />
    </Svg>
  </View>

)
export default CheckOutIcon
