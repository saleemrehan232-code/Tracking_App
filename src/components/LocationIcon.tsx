import * as React from "react"
import { View } from "react-native"
import { G, Mask, Path, Svg } from "react-native-svg"
const LocationIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
            {...props}
        >
            <Mask
                id="a"
                width={16}
                height={16}
                x={3}
                y={1}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "alpha",
                }}
            >
                <Path
                    fill="#4876BA"
                    fillRule="evenodd"
                    d="M3.333 6.177A4.663 4.663 0 0 1 8 1.51a4.663 4.663 0 0 1 4.667 4.667c0 2.78-2.947 6.613-4.154 8.073a.662.662 0 0 1-1.02 0c-1.213-1.46-4.16-5.293-4.16-8.073Zm3 0a1.667 1.667 0 1 0 3.335-.001 1.667 1.667 0 0 0-3.335 0Z"
                    clipRule="evenodd"
                />
            </Mask>
            <G mask="url(#a)">
                <Path fill="#4876BA" d="M0 0h16v16H0z" />
            </G>
        </Svg>
    </View>
)
export default LocationIcon
