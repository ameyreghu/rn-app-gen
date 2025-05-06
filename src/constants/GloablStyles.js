import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export const defaultStyles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    inputContainer: {
        marginBottom: 12,
        paddingHorizontal: 0,
    },
    textInput: {
        fontSize: 16,
        paddingVertical: 2,
        padding: 12,
        marginBottom: 12,
        backgroundColor:"#fff"
    },
    button: {
        marginVertical: 10,
        borderRadius: 5,
    },
});