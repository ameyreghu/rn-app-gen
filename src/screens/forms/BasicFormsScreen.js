import React, { useState, useCallback } from "react";
import { Text, View, KeyboardAvoidingView, ScrollView, Platform, Alert } from "react-native";
import { defaultStyles, globalStyles } from "../../constants/GloablStyles";
import AppBar from "../../components/AppBar";
import DevLabel from "../../components/DevLabel";
import { useNavigation } from "@react-navigation/native";
import { CenteredLoadingIndicator } from "../../components/CommonComponents";
//import {Input ,Button,CheckBox } from "@rncui/themed";
import {TextInput,Button} from 'react-native-paper';
import { LabeledCheckBox } from "../../components/LabeledCheckBox";


const ComponentRenderer = React.memo(({ componentData, state, setState, actionHandler }) => {
    console.log('ComponentRenderer', componentData);
    if (!componentData) return null;

    switch (componentData.type) {
        case 'text':
            return <Text style={componentData.style}>{componentData.text}</Text>;
        case 'button':
            return <Button  mode="contained"
           // style={defaultStyles.button}
            onPress={() => {
                actionHandler({ action: componentData.action });
            }}><Text>{componentData.text}</Text> </Button>;
        case 'input':
            return <TextInput
                value={state[componentData.stateKey]}
                placeholder={componentData.placeholder}
                mode="outlined"
                style={defaultStyles.textInput}
                inputMode={componentData?.inputMode}
                label={componentData.label}
                onChangeText={(val) => {
                    console.log('TextInput', val);
                    setState((prevState) => ({ ...prevState, [componentData.stateKey]: val }));
                }}
            />;
        case 'checkbox':
            return <LabeledCheckBox
                label={componentData.label}
                value={state[componentData.stateKey]}
                onPress={() => {
                    setState((prevState) => ({ ...prevState, [componentData.stateKey]: !prevState[componentData.stateKey] }));
                }}
            />;
        default:
            return <View />;
    }
});

export const BasicFormScreen = ({ screenData }) => {
    const [state, setState] = useState({ ...screenData.initialState, loading: false });

    console.log('BasicFormScreen State', state);

    const navigation = useNavigation();

    const actionHandler = useCallback(({ action }) => {
        console.log('ActionHandler', action);
        if (!action) return null;

        switch (action.type) {
            case 'navigate':
                navigation.navigate(action.route, action?.params);
                break;
            case 'formSubmit':
                setState((prevState) => ({ ...prevState, loading: true }));
                setTimeout(()=>{
                     console.log('Form Submit', state);
                     console.log('Submiting to Api',action.url, 'Methond',action.method)
                     setState((prevState) => ({ ...prevState, loading: false }));
                    handleFormSubmissionStatus();
                },1000);
               
                // Handle API call action
                break;
            default:
                return null;
        }
    }, [navigation, state]);

    function handleFormSubmissionStatus() {
        Alert.alert(
            'Form Submission',
            'Form submitted successfully!',
            [
                {
                    text: 'OK',
                    onPress: () => navigation.pop(),
                },
            ]
        );
    }

    return (
        state?.loading ? <CenteredLoadingIndicator /> : <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                contentContainerStyle={[globalStyles.container, defaultStyles.screen]}
                keyboardShouldPersistTaps="handled"
            >
                {
                    screenData.components.map((component, index) => (
                        <ComponentRenderer
                            key={index}
                            componentData={component}
                            state={state}
                            setState={setState}
                            actionHandler={actionHandler}
                        />
                    ))
                }
                <DevLabel text={'Basic Forms'} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};