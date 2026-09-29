import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const CheckInIcon3 = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={18}
            fill="none"
            {...props}
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.833 9.889v5.333A1.778 1.778 0 0 1 12.055 17H2.278A1.778 1.778 0 0 1 .5 15.222V5.445a1.778 1.778 0 0 1 1.778-1.778H7.61M11.166 1h5.333v5.334M6.722 10.778 16.499 1"
            />
        </Svg>
    </View>

)
export default CheckInIcon3
