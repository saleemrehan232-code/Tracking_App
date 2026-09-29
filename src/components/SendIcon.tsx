import * as React from "react"
import { View } from "react-native"
import { Circle, Path, Svg } from "react-native-svg"
const SendIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            fill="none"
            {...props}
        >
            <Circle
                cx={25}
                cy={25}
                r={24.925}
                fill="#4877BA"
                transform="rotate(-.174 25 25)"
            />
            <Path
                fill="#fff"
                d="m13.937 21.913 20.43-3.505a.605.605 0 0 1 .638.879l-9.667 18.336a.606.606 0 0 1-1.1-.065l-3.358-8.685-7.223-5.894a.605.605 0 0 1 .28-1.066Zm1.516.97 5.903 4.815.052-.056.06-.05 6.86-4.978a.605.605 0 0 1 .794.908l-.082.072-6.86 4.979a.608.608 0 0 1-.096.057l2.803 7.25 8.474-16.071-17.908 3.073Z"
            />
        </Svg>
    </View>
)
export default SendIcon
