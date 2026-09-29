import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const MessageIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            fill="none"
            {...props}
        >
            <Rect width={50} height={50} fill="#4876BA" rx={6} />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.774}
                d="M31 27a1.333 1.333 0 0 1-1.333 1.334h-8L19 31V20.333A1.334 1.334 0 0 1 20.333 19h9.334A1.333 1.333 0 0 1 31 20.333V27Z"
            />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeWidth={0.75}
                d="M23 22h5M23 25h5"
            />
        </Svg>
    </View>

)
export default MessageIcon
