import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const BlueCalender = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={16}
            fill="none"
            {...props}
        >
            <Rect
                width={14.625}
                height={12.719}
                x={1.188}
                y={2.448}
                stroke="#4876BA"
                rx={3}
            />
            <Path
                stroke="#4876BA"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.229.781v3.334M10.604.781v3.334"
            />
            <Path
                fill="#4876BA"
                d="M.834 6.573h15.333c0 .736-.597 1.333-1.333 1.333H2.167A1.333 1.333 0 0 1 .834 6.573Z"
            />
        </Svg>
    </View>
)
export default BlueCalender
