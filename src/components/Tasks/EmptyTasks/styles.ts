import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: theme.colors.gray[400],
        paddingVertical: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    image: {
        height: 56,
        width: 56
    },
    emptyTitle: {
        marginTop: 16,
        fontSize: 14,
        fontWeight: '700',
        color: theme.colors.gray[300],
    },
    emptyText: {
        fontSize: 14,
        color: theme.colors.gray[300],
    }
})