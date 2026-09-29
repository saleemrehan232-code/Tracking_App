import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const ProfileIcon3 = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <Path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            />
            <Path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M22.222 8.5h-5.444a.778.778 0 0 0-.778.778V12c0 .43.348.778.778.778h5.444c.43 0 .778-.348.778-.778V9.278a.778.778 0 0 0-.778-.778ZM17.556 8.5V6.944a1.944 1.944 0 1 1 3.889 0V8.5"
            />
        </Svg>
    </View>

)
export default ProfileIcon3
