import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const AttachmentIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={16}
            fill="none"
            {...props}
        >
            <Path
                fill="#7E8D95"
                d="M6.91 3.636V12a2.908 2.908 0 1 1-5.82 0V2.91a1.818 1.818 0 0 1 3.637 0v7.636a.73.73 0 0 1-.727.727.73.73 0 0 1-.727-.727v-6.91H2.182v6.91a1.818 1.818 0 0 0 3.636 0V2.909A2.908 2.908 0 1 0 0 2.91V12c0 2.21 1.79 4 4 4s4-1.79 4-4V3.636H6.91Z"
            />
        </Svg>
    </View>

)
export default AttachmentIcon
