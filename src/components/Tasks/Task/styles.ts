import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: theme.colors.gray[500],
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },
    hover: {
        backgroundColor: theme.colors.gray[700]
    },
    text: {
        flex: 1,
        textAlign: 'justify',
        fontSize: 14,
        color: theme.colors.gray[100],
        lineHeight: 19.6,
        marginRight: 8
    },
    textTaskCompleted: {
        color: theme.colors.gray[300],
        textDecorationLine: 'line-through'
    },
    buttonDeleteTask: {
        height: 32,
        width: 32,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    }
})