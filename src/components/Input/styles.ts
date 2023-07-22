import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray[500],
        height: 54,
        padding: 16,
        borderWidth: 1,
        borderColor: theme.colors.gray[700],
        borderRadius: 8,
        color: theme.colors.gray[100],
        fontSize: 16
    }
})