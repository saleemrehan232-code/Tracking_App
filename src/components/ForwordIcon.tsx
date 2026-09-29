import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const ForwordIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <Rect width={24} height={24} fill="#fff" rx={12} />
            <Path
                stroke="#4873B7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m9.5 16.5 5-4.5-5-4.5"
            />
        </Svg>
    </View>
)
export default ForwordIcon
