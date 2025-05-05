import { Text, View } from "react-native";
import { DynamicScreen } from "./src/DynamicScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//CustomApp is where we render the the App after we have access to appConfig .
export function CustomApp({ appConfig }) {
    console.log('CustomApp', appConfig);


    const Stack = createStackNavigator();

    function MainNavigator() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={appConfig.initialRoute}>
                    {appConfig.routes.map((route, index) => {
                        const screenData = appConfig.screens.find(screen => screen.route.toLowerCase() === route.toLowerCase());
                        return (
                            <Stack.Screen
                                key={index}
                                name={route}
                                children={(props) => <DynamicScreen {...props} screenData={screenData} />}
                            />
                        );
                    })}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    return (
        <MainNavigator />
    );
}




