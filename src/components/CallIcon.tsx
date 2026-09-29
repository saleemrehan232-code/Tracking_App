import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const CallIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fill="none"
            {...props}
        >
            <Rect width={32} height={32} fill="#fff" fillOpacity={0.1} rx={16} />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.562 18.65v1.758a1.173 1.173 0 0 1-1.278 1.173 11.6 11.6 0 0 1-5.058-1.8 11.43 11.43 0 0 1-3.517-3.517 11.6 11.6 0 0 1-1.8-5.081 1.173 1.173 0 0 1 1.167-1.278h1.758a1.172 1.172 0 0 1 1.173 1.008c.074.563.212 1.115.41 1.647a1.172 1.172 0 0 1-.264 1.237l-.744.744a9.378 9.378 0 0 0 3.517 3.517l.744-.744a1.173 1.173 0 0 1 1.237-.264 7.527 7.527 0 0 0 1.647.41 1.173 1.173 0 0 1 1.008 1.19Z"
            />
        </Svg>
    </View>
)
export default CallIcon
