import { TextInput, TextInputProps } from "react-native";

import { styles } from './styles'
import { theme } from "../../styles/theme";
import { useState } from "react";

interface InputProps extends TextInputProps {
}

export function Input({...rest}: InputProps) {
    const [hasFocus, setHasFocus] = useState(false)

    return(
        <TextInput
            style={[styles.container, hasFocus && { borderColor: theme.colors.purpleDark}]}
            placeholderTextColor={theme.colors.gray[300]}
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
            {...rest}
        />
    )
}