import React, { useState, useCallback, useEffect,Button } from "react";
import { Text, TextInput, View, KeyboardAvoidingView, FlatList, Platform, Alert } from "react-native";
import { defaultStyles, globalStyles } from "../../constants/GloablStyles";
import AppBar from "../../components/AppBar";
import DevLabel from "../../components/DevLabel";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { CenteredLoadingIndicator } from "../../components/CommonComponents";
import { get } from "../../data/BaseClient";
import { BasicListTile } from "../../components/BasicListTile";

const ComponentRenderer = React.memo(({ componentData, state, setState, actionHandler }) => {
    if (!componentData) return null;

    switch (componentData.type) {
        case 'text':
            return <Text style={componentData.style}>{componentData.text}</Text>;
        case 'button':
            return <Button title={componentData.text}
                style={defaultStyles.button}
                onPress={() => actionHandler({ action: componentData.action })} />;
        case 'list':
            return (
                <View style={{ flex: 1, minHeight: 200 }}>
                    <FlatList
                        data={state?.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <BasicListTile 
                                leading={item[componentData?.itemComponent?.idKey]} 
                                title={item[componentData?.itemComponent?.titleKey]} 
                                description={item[componentData?.itemComponent?.bodyKey]} />
                        )}
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={{ flex: 1 }}
                    />
                </View>
            );
        default:
            return <View />;
    }
});

export const BasicListingScreen = ({ screenData }) => {
    const [state, setState] = useState({ ...screenData.initialState, loading: false });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        if (state?.loading || !screenData?.initAction) return;

        setState((prevState) => ({ ...prevState, loading: true }));
        try {
            const result = await get({ url: screenData.initAction.apiUrl });
            if (result.success) {
                setState((prevState) => ({ ...prevState, loading: false, data: result.data }));
            } else {
                setState((prevState) => ({ ...prevState, loading: false, error: result.error }));
            }
        } catch (error) {
            setState((prevState) => ({ ...prevState, loading: false, error: error.message }));
        }
    };

    const navigation = useNavigation();

    const actionHandler = useCallback(({ action }) => {
        if (!action) return;

        switch (action.type) {
            case 'navigate':
                navigation.navigate(action.route, action?.params);
                break;
            case 'formSubmit':
                setState((prevState) => ({ ...prevState, loading: true }));
                setTimeout(() => {
                    console.log('Form Submit', state);
                    console.log('Submitting to API', action.url, 'Method', action.method);
                    setState((prevState) => ({ ...prevState, loading: false }));
                    handleFormSubmissionStatus();
                }, 1000);
                break;
            default:
                console.warn('Unhandled action type:', action.type);
        }
    }, [navigation, state]);

    const handleFormSubmissionStatus = () => {
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
    };

    return (
        state?.loading ? (
            <CenteredLoadingIndicator />
        ) : (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height" }
            >
                <FlatList
                    data={screenData.components}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <ComponentRenderer
                            componentData={item}
                            state={state}
                            setState={setState}
                            actionHandler={actionHandler}
                        />
                    )}
                    contentContainerStyle={[globalStyles.container, defaultStyles.screen]}
                    keyboardShouldPersistTaps="handled"
                />
                <DevLabel text={'Basic Listing'} />
            </KeyboardAvoidingView>
        )
    );
};