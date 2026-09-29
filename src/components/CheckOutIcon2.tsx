import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const CheckOutIcon2 = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
            {...props}
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.333 7.222V2.556A1.556 1.556 0 0 1 4.89 1h8.555A1.556 1.556 0 0 1 15 2.556v8.555a1.556 1.556 0 0 1-1.556 1.555H8.778M5.667 15H1v-4.667M9.556 6.444 1 15"
            />
        </Svg>
    </View>

)
export default CheckOutIcon2
