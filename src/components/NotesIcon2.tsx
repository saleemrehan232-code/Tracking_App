import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const NotesIcon2 = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={18}
            fill="none"
            {...props}
        >
            <Path
                stroke="#4E85C2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.1 1H2.7a1.6 1.6 0 0 0-1.6 1.6v12.8A1.6 1.6 0 0 0 2.7 17h9.6a1.6 1.6 0 0 0 1.6-1.6V5.8L9.1 1Z"
            />
            <Path
                stroke="#4E85C2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.1 1v4.8h4.8M10.7 9.8H4.3M10.7 13H4.3M5.9 6.6H4.3"
            />
        </Svg>
    </View>
)
export default NotesIcon2
