import React from "react"
import { View } from "react-native"
import Svg, { Circle, Path } from 'react-native-svg';

const BtnNext3 = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={61}
            height={61}
            fill="none"
            {...props}
        >
            <Circle cx={30.5} cy={30.5} r={24.261} fill="#4877BA" />
            <Path
                fill="#4877BA"
                d="M61 30.5C61 47.345 47.345 61 30.5 61S0 47.345 0 30.5 13.655 0 30.5 0 61 13.655 61 30.5Zm-59.392 0c0 15.956 12.935 28.892 28.892 28.892 15.956 0 28.892-12.936 28.892-28.892 0-15.957-12.936-28.892-28.892-28.892-15.957 0-28.892 12.935-28.892 28.892Z"
            />
            <Path
                fill="#FAFAFA"
                fillRule="evenodd"
                d="m33.072 30.008-4.16-4.16a.695.695 0 0 0-.984.984l3.674 3.668-3.667 3.667a.67.67 0 0 0-.208.492.695.695 0 0 0 1.185.492l4.16-4.159a.691.691 0 0 0 .2-.492.691.691 0 0 0-.2-.492Z"
                clipRule="evenodd"
            />
        </Svg>
    </View>

)
export default BtnNext3

