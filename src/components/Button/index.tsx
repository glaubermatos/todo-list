import { Pressable, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import Feather from '@expo/vector-icons/Feather';

import { styles } from './styles'
import { theme } from "../../styles/theme";

interface ButtonProps extends TouchableOpacityProps {}

export function Button({...rest}: ButtonProps) {
    return(
        <Pressable
            style={({pressed}) => [
                styles.container,
                pressed && styles.hover
            ]}
            {...rest}
        >            
            <Feather name="plus-circle" size={16} color={theme.colors.gray[100]} />
        </Pressable>
    )
}