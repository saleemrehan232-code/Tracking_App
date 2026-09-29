import * as React from "react"
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
const LogoutIcon = ({ width = 28, height = 28, color = 'black' }) => {
    return (
        <View>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={width}
                height={height}
                fill={color}
                >
                <Path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" fill="white" />
            </Svg>
        </View>
    );
};

export default LogoutIcon;
