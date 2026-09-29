import * as React from "react"
import { View } from "react-native"
import { Defs, FeBlend, FeColorMatrix, FeComposite, FeFlood, FeGaussianBlur, FeOffset, Filter, G, LinearGradient, Path, RadialGradient, Rect, Stop, Svg } from "react-native-svg"
const HomeBg = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={262}
            height={93}
            fill="none"
            {...props}
        >
            <G filter="url(#a)">
                <Rect
                    width={83}
                    height={81}
                    x={24}
                    y={2}
                    fill="url(#b)"
                    fillOpacity={0.2}
                    rx={17}
                    shapeRendering="crispEdges"
                />
                <Rect
                    width={83}
                    height={81}
                    x={24}
                    y={2}
                    fill="url(#c)"
                    fillOpacity={0.3}
                    rx={17}
                    shapeRendering="crispEdges"
                />
                <Rect
                    width={82}
                    height={80}
                    x={24.5}
                    y={2.5}
                    stroke="url(#d)"
                    strokeOpacity={0.4}
                    rx={16.5}
                    shapeRendering="crispEdges"
                />
                <Path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M234.33 58.027a3.125 3.125 0 0 1 3.125-3.125h16.875"
                />
            </G>
            <Defs>
                <RadialGradient
                    id="b"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="rotate(22.751 -42.259 -184.335) scale(220.884 109.72)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" stopOpacity={0.4} />
                    <Stop offset={0.931} stopColor="#fff" stopOpacity={0} />
                </RadialGradient>
                <RadialGradient
                    id="c"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="rotate(4.96 -774.241 -829.984) scale(164.462 43.2429)"
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#4C81C0" />
                    <Stop offset={1} stopColor="#FFB571" stopOpacity={0} />
                </RadialGradient>
                <LinearGradient
                    id="d"
                    x1={1.643}
                    x2={81.251}
                    y1={2}
                    y2={130.653}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#fff" />
                    <Stop offset={1} stopColor="#EEEDED" stopOpacity={0} />
                </LinearGradient>
                <Filter
                    id="a"
                    width={469.97}
                    height={170.811}
                    x={-169.485}
                    y={-42.906}
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <FeFlood floodOpacity={0} result="BackgroundImageFix" />
                    <FeGaussianBlur in="BackgroundImageFix" stdDeviation={22.453} />
                    <FeComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_144_3055"
                    />
                    <FeColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <FeOffset dy={4} />
                    <FeGaussianBlur stdDeviation={2.8} />
                    <FeComposite in2="hardAlpha" operator="out" />
                    <FeColorMatrix values="0 0 0 0 0.3 0 0 0 0 0.3 0 0 0 0 0.3 0 0 0 0.19 0" />
                    <FeBlend
                        in2="effect1_backgroundBlur_144_3055"
                        result="effect2_dropShadow_144_3055"
                    />
                    <FeBlend
                        in="SourceGraphic"
                        in2="effect2_dropShadow_144_3055"
                        result="shape"
                    />
                    <FeColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <FeOffset dx={-5.346} dy={-5.346} />
                    <FeGaussianBlur stdDeviation={133.647} />
                    <FeComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                    <FeColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.02 0" />
                    <FeBlend in2="shape" result="effect3_innerShadow_144_3055" />
                </Filter>
            </Defs>
        </Svg>
    </View>

)
export default HomeBg
