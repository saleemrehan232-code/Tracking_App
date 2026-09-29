import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const LeavesIcon = (props) => (
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
                d="M15.5 22.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
            />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.5 11.3v4.2l2.8 1.4"
            />
        </Svg>
    </View>

)
export default LeavesIcon
