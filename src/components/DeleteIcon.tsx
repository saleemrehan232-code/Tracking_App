import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const DeleteIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <Path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6.375h18M8.625 3h6.75M18.75 6.375H5.25V21h13.5V6.375Z"
            />
        </Svg>
    </View>

)
export default DeleteIcon