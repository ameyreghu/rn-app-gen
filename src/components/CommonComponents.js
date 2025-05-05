import { ActivityIndicator, View } from "react-native";
import { globalStyles } from "../constants/GloablStyles";

export function CenteredLoadingIndicator() {
    return (
        <View style={globalStyles.centeredContainer}>
            <ActivityIndicator size="large" color="#6200ee" />
        </View>
    );
}