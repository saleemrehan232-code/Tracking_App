import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const VideoCallIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={33}
            fill="none"
            {...props}
        >
            <Rect
                width={32}
                height={32}
                y={0.868}
                fill="#fff"
                fillOpacity={0.1}
                rx={16}
            />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m24.088 13.351-4.923 3.517 4.923 3.516v-7.033ZM17.758 11.944h-7.736c-.777 0-1.407.63-1.407 1.407v7.033c0 .777.63 1.407 1.407 1.407h7.736c.777 0 1.407-.63 1.407-1.407V13.35c0-.777-.63-1.407-1.407-1.407Z"
            />
        </Svg>
    </View>
)
export default VideoCallIcon
