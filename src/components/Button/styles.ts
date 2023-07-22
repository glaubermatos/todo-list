import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        height: 52,
        width: 52,
        backgroundColor: theme.colors.blueDark,
        borderRadius: 6,

        alignItems: 'center',
        justifyContent: 'center'
    },
    hover: {
        backgroundColor: theme.colors.blue
    },
    buttonText: {
        color: theme.colors.gray[200],
        fontSize: 26,
        fontWeight: "700"
    }
})