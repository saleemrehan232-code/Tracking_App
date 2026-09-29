import * as React from "react"
import { View } from "react-native"
import { Path, Rect, Svg } from "react-native-svg"
const NotificationIcon = (props) => (
    <View>
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={33}
            fill="none"
            {...props}
        >
            <Rect
                width={32}
                height={32}
                y={0.5}
                fill="#fff"
                fillOpacity={0.1}
                rx={16}
            />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.09 13.99c0-.925-.382-1.813-1.064-2.467a3.714 3.714 0 0 0-2.572-1.023c-.964 0-1.889.368-2.57 1.023a3.422 3.422 0 0 0-1.066 2.468c0 4.073-1.818 5.236-1.818 5.236h10.91s-1.82-1.163-1.82-5.236ZM17.545 22.5h-2.181"
            />
        </Svg>
    </View>

)
export default NotificationIcon
