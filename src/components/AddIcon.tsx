import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const AddIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={34}
            height={29}
            fill="none"
            {...props}
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M22.833 27v-2.778a5.556 5.556 0 0 0-5.555-5.555H7.556A5.556 5.556 0 0 0 2 24.222V27M12.417 13.111a5.556 5.556 0 1 0 0-11.111 5.556 5.556 0 0 0 0 11.111ZM28.389 8.944v8.334M32.556 13.111h-8.334"
            />
        </Svg>
    </View>

)
export default AddIcon
