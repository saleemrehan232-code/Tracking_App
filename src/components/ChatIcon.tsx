import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const ChatIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={29}
            height={29}
            fill="none"
            {...props}
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M27 18.667a2.778 2.778 0 0 1-2.778 2.777H7.556L2 27V4.778A2.778 2.778 0 0 1 4.778 2h19.444A2.778 2.778 0 0 1 27 4.778v13.889Z"
            />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth={1.5}
                d="M10.333 8.25H20.75M10.333 14.5H20.75"
            />
        </Svg>
    </View>

)
export default ChatIcon
