import * as React from "react"
import { View } from "react-native"
import { Circle, Path, Svg } from "react-native-svg"
const UploadImage = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={34}
            height={34}
            fill="none"
            {...props}
        >
            <Circle
                cx={17}
                cy={17}
                r={16}
                fill="#567DF4"
                stroke="#fff"
                strokeWidth={0}
            />
            <Path
                fill="#fff"
                fillRule="evenodd"
                d="M22.25 11.857h-10.5a.884.884 0 0 0-.619.251.848.848 0 0 0-.256.606v8.572c0 .227.092.445.256.606.164.16.387.25.619.25h10.5c.232 0 .455-.09.619-.25a.848.848 0 0 0 .256-.606v-8.572a.848.848 0 0 0-.256-.606.884.884 0 0 0-.619-.25ZM11.75 11c-.464 0-.91.18-1.237.502A1.697 1.697 0 0 0 10 12.714v8.572c0 .454.184.89.513 1.212.328.321.773.502 1.237.502h10.5a1.78 1.78 0 0 0 1.237-.502A1.684 1.684 0 0 0 24 21.286v-8.572c0-.454-.184-.89-.513-1.212A1.769 1.769 0 0 0 22.25 11h-10.5Z"
                clipRule="evenodd"
            />
            <Path
                fill="#fff"
                d="M19.316 16.697a.44.44 0 0 1 .504-.08l3.305 1.669v3.857h-12.25V20.43l2.316-2.018a.44.44 0 0 1 .55-.053l2.328 1.52 3.247-3.18v-.001Z"
            />
            <Path
                fill="#fff"
                fillRule="evenodd"
                d="M13.938 16.143a1.334 1.334 0 0 0 .928-.377 1.282 1.282 0 0 0 .385-.909 1.262 1.262 0 0 0-.385-.91 1.315 1.315 0 0 0-.928-.376c-.348 0-.682.136-.928.377a1.272 1.272 0 0 0-.384.909c0 .341.138.668.384.91.246.24.58.376.928.376Z"
                clipRule="evenodd"
            />
        </Svg>
    </View>

)
export default UploadImage
