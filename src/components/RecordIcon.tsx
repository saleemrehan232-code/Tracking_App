import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const RecordIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={23}
            height={29}
            fill="none"
            {...props}
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M1.5 23.875a3.125 3.125 0 0 1 3.125-3.125H21.5"
            />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4.625 2H21.5v25H4.625A3.125 3.125 0 0 1 1.5 23.875V5.125A3.125 3.125 0 0 1 4.625 2Z"
            />
        </Svg>
    </View>

)
export default RecordIcon
