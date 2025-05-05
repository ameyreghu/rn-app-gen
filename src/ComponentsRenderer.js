import React from 'react';
import { Text,TextInput, View ,Button} from 'react-native';
import { defaultStyles } from './constants/GloablStyles';
import { useNavigation } from '@react-navigation/native';
//import {Button} from "@rncui/themed";


//Base Component Renderer (Genric ) , further thinking is reqired for me to devise some way for for handling the usual stuff
export function ComponentRenderer({componentData}) {
    const navigation = useNavigation();
    console.log('ComponentRenderer', componentData);
    if (!componentData) return null;

    switch (componentData.type) {
        case 'text':
            return <Text style={componentData.style}>{componentData.text}</Text>;
        case 'button':
            return <Button title={componentData.text} style={defaultStyles.button} onPress={() => {
                actionHandler({action: componentData.action, navigation});
            }} />;
        case 'input':
            return <TextInput placeholder={componentData.placeholder} style={defaultStyles.textInput} />;
        default:
            return <View />;
    }
}

function actionHandler({action, navigation}) {
    console.log('ActionHandler', action);
    if (!action) return null;

    //actions need to think , currently only navigation is handled.
    switch (action.type) {
        case 'navigate':
            navigation.navigate(action.route, action?.params);
            break;
        case 'apiCall':
            // Handle API call action
            break;
        default:
            return null;
    }
}