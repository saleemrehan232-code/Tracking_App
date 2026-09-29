import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const BtnBack = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            fill="none"
            {...props}
        >
            <Rect width={28} height={28} fill="#EFEFEF" rx={14} />
            <Path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16 10-4 4 4 4"
            />
        </Svg> 
    </View>
)
export default BtnBack
