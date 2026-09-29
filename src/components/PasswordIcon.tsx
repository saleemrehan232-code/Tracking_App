import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const PasswordIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={17}
            fill="none"
            {...props}
        >
            <Path
                fill="#073C59"
                d="m15.452 2.329.577-.57A.817.817 0 1 0 14.874.606l-1.138 1.147-2.301 2.3-5.13 5.123a4.066 4.066 0 1 0 1.154 1.155l4.545-4.554 1.724 1.732a.814.814 0 1 0 1.146-1.154L13.151 4.63l1.154-1.147.57.57a.814.814 0 0 0 1.154-1.147l-.577-.577ZM4.068 15.005a2.44 2.44 0 1 1 0-4.879 2.44 2.44 0 0 1 0 4.88Z"
            />
        </Svg>
    </View>

)
export default PasswordIcon
