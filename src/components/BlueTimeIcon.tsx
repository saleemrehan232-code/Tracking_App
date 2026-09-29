import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const BlueTimeIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={18}
            fill="none"
            {...props}
        >
            <Path
                stroke="#4876BA"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.5 17a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
            />
            <Path
                stroke="#4876BA"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.772 3.909v4.909l3.637 1.636"
            />
        </Svg>
    </View>

)
export default BlueTimeIcon
