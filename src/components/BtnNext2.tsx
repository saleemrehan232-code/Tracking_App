import React from "react"
import { View } from "react-native"
import Svg, { Circle, Path } from 'react-native-svg';

const BtnNext2 = (props) => (
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
                d="M30.5.804c0-.444.36-.805.804-.793A30.5 30.5 0 1 1 3.58 44.838a.788.788 0 0 1 .351-1.074.822.822 0 0 1 1.089.355 28.892 28.892 0 1 0 26.284-42.5.822.822 0 0 1-.804-.815Z"
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
export default BtnNext2