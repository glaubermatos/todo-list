import { StyleSheet } from "react-native";
import { theme } from "../../../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 8,
    },
    progressText: {
        fontSize: 14,
        fontWeight: '700'
    },
    progressTextCreated: {
        color: theme.colors.blue
    },
    progressTextCompleted: {
        color: theme.colors.purple
    },
    progressTextAmountContainer: {
        height: 19,
        width: 25,
        borderRadius: 999,
        backgroundColor: theme.colors.gray[400],
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressTextAmount: {
        fontSize: 12,
        color: theme.colors.gray[200],
        fontWeight: '700'
    }
})