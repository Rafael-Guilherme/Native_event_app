import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 8,
        marginBottom: 10
    },
    name: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 8
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44'
    },
    buttonText: {
        fontSize: 24,
        color: '#fff'
    },
})