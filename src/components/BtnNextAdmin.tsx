import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const BtnNextAdmin = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            fill="none"
            {...props}
        >
            <Rect width={24} height={24} x={0.5} y={0.5} fill="#fff" rx={12} />
            <Path
                stroke="#4873B7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m10 17 5-4.5L10 8"
            />
        </Svg>
    </View>

)
export default BtnNextAdmin
