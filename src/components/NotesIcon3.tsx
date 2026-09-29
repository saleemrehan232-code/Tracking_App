import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const NotesIcon3 = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={46}
            fill="none"
            {...props}
        >
            <Rect width={39} height={45} x={0.5} y={0.5} fill="#4E85C2" rx={6} />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.4 16h-5.6a1.4 1.4 0 0 0-1.4 1.4v11.2a1.4 1.4 0 0 0 1.4 1.4h8.4a1.4 1.4 0 0 0 1.4-1.4v-8.4L21.4 16Z"
            />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.4 16v4.2h4.2M22.8 23.7h-5.6M22.8 26.5h-5.6M18.6 20.9h-1.4"
            />
        </Svg>
    </View>
)
export default NotesIcon3
