import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { mockConfig } from "./mockConfig";
import { CustomApp } from "./CustomApp";



//This is the main container for JDF . Here we load the app config/ model then render the entire app.

export function AppConatiner() {
    const [appConfig, setAppConfig] = useState();
    const [Loading, setLoading] = useState(false);
    useEffect(() => {
        loadAppConfig();
    }, []);

    //ideally this should be from some api, may be we can chache this and add additional logic to check if the config is changed or not.
    //also 
    async function loadAppConfig() {
        setLoading(true);
        setTimeout(() => {
            console.log("Loading App Config...");
            setAppConfig(mockConfig);
            setLoading(false);
        }, 1000);

    }

    return (
        <View style={styles.root}>
            {Loading ? <LoadingIndicator /> : <CustomApp appConfig={mockConfig} />}
        </View>
    );

}

function LoadingIndicator() {
    return (
        <View style={styles.centeredContainer}>
            <Text>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff"
    },
    centeredContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});