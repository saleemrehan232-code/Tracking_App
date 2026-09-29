import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const RateIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={31}
            height={31}
            fill="none"
            {...props}
        >
            <Rect width={31} height={31} fill="#4876BA" rx={2.452} />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M15.502 6.333v18.334M19.667 9.666h-6.25a2.917 2.917 0 1 0 0 5.833h4.166a2.916 2.916 0 1 1 0 5.834H10.5"
            />
        </Svg>
    </View>

)
export default RateIcon
