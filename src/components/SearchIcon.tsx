import * as React from "react"
import { View } from "react-native"
import { Path, Svg } from "react-native-svg"
const SearchIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={15}
            fill="none"
            {...props}
        >
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.222 12.944A6.222 6.222 0 1 0 7.222.5a6.222 6.222 0 0 0 0 12.444ZM15 14.5l-3.383-3.383"
            />
        </Svg>
    </View>

)
export default SearchIcon
