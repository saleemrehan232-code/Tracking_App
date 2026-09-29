import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"

const InfoIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={11}
            fill="none"
            {...props}
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.736 10.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM5.736 3.5v2M5.736 7.5h.005"
            />
        </Svg>
    </View>

)
export default InfoIcon
