import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 70,
        height: 173,
        backgroundColor: theme.colors.gray[700],
        alignItems: 'center',
        gap: 40
    }
})