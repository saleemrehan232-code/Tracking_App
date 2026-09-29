import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const ProfileIcon2 = (props) => (
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
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            />
        </Svg>
    </View>

)
export default ProfileIcon2
