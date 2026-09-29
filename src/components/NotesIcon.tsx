import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const NotesIcon = (props) => (
  <View>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={31}
      height={31}
      fill="none"
      {...props}
    >
      <Rect width={31} height={31} fill="#4876BA" rx={3.097} />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.9 8.5h-5.6a1.4 1.4 0 0 0-1.4 1.4v11.2a1.4 1.4 0 0 0 1.4 1.4h8.4a1.4 1.4 0 0 0 1.4-1.4v-8.4l-4.2-4.2Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.9 8.5v4.2h4.2M18.3 16.2h-5.6M18.3 19h-5.6M14.1 13.4h-1.4"
      />
    </Svg>
  </View>

)
export default NotesIcon
