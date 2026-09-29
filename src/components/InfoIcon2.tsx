import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const InfoIcon2 = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={17}
            fill="none"
            {...props}
        >
            <Path
                stroke="#4E4E4E"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.736 16.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.736 5.3v4M8.736 11.7h.006"
            />
        </Svg>
    </View>

)
export default InfoIcon2
