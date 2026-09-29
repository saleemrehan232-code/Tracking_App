import React from "react"
import { View } from "react-native"
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

const AdminBgDown = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={360}
            height={507}
            fill="none"
            {...props}
        >
            <Rect
                width={361.571}
                height={614}
                x={360.931}
                y={614}
                fill="url(#a)"
                rx={20}
                transform="rotate(-180 360.931 614)"
            />
            <Path
                fill="url(#b)"
                fillOpacity={0.95}
                d="M44.111 364.471C71.787 203.31 209.013 88.047 350.612 107.024c141.599 18.977 233.953 165.007 206.277 326.168-27.676 161.161-164.901 276.424-306.5 257.448-141.6-18.977-233.953-165.008-206.278-326.169Z"
            />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={365.677}
                    x2={788.652}
                    y1={1228.65}
                    y2={1117.58}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#57BFEB" />
                    <Stop offset={1} stopColor="#70C4A0" />
                </LinearGradient>
                <LinearGradient
                    id="b"
                    x1={261.725}
                    x2={399.396}
                    y1={505.281}
                    y2={174.035}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#56BFEE" />
                    <Stop offset={1} stopColor="#476FB5" />
                </LinearGradient>
            </Defs>
        </Svg>
    </View>

)
export default AdminBgDown
