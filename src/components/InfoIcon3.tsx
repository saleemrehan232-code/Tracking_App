import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const InfoIcon3 = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={15}
            fill="none"
            {...props}
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.786}
                d="M8 14.428a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM8.001 4.628v2.8M8.001 10.229h.006"
            />
        </Svg>
    </View>
)
export default InfoIcon3
