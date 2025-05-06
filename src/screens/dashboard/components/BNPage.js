import React, { useState, useCallback, useEffect } from "react";
import { Text, View, KeyboardAvoidingView, FlatList, Platform, Alert, ScrollView } from "react-native";
import { defaultStyles, globalStyles } from "../../../constants/GloablStyles";
import DevLabel from "../../../components/DevLabel";
import { useNavigation } from "@react-navigation/native";
import { CenteredLoadingIndicator } from "../../../components/CommonComponents";
import { get } from "../../../data/BaseClient";
import { BasicListTile } from "../../../components/BasicListTile";
import { CardGroup } from "../../../components/DashBoardCard";
import { Carousel } from "../../../components/Carousel";
import { Button } from "react-native-paper";


const ComponentRenderer = React.memo(({ componentData, state, setState, actionHandler }) => {
    if (!componentData) return null;

    switch (componentData.type) {
        case 'text':
            return <Text style={componentData.style}>{componentData.text}</Text>;
        case 'cardGroup':
            console.log('CardGroup', componentData?.cardData);
            return <CardGroup cardData={componentData?.cardData} />;
        case 'carousel':
            return <Carousel data={componentData?.data} />
        case 'button':
            return <Button mode="contained"
                style={defaultStyles.button}
                onPress={() => {
                    actionHandler({ action: componentData.action });
                }}><Text>{componentData.text}</Text> </Button>;
        case 'list':
            return (state?.data?.map((item, index) => {
                return (
                    <BasicListTile
                        key={index}
                        title={item?.title}
                        subtitle={item?.subtitle}
                        onPress={() => actionHandler({ action: componentData.action })}
                    />
                );
            })
            );
        default:
            return <View />;
    }
});

//Page for Bottom Navigation
export const BNPage = ({ pageData }) => {
    console.log('BNPage', pageData);
    const [state, setState] = useState({ ...pageData.initialState, loading: false });

    useEffect(() => {
        loadData();
    }, [pageData]);

    const loadData = async () => {
        console.log('Load Data -s',pageData?.initAction);
        if (state?.loading || !pageData?.initAction) return;
        console.log('Load Data -ss');

        setState((prevState) => ({ ...prevState, loading: true }));
        try {
            const result = await get({ url: pageData.initAction.apiUrl });
          //  console.log('Result', result);
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
            <View style={[globalStyles.container,defaultStyles.screen]}>
                <ScrollView style={globalStyles.container}>
                    {pageData?.components?.map((component, index) => {
                        return (<ComponentRenderer
                            key={index}
                            componentData={component}
                            state={state}
                            setState={setState}
                            actionHandler={actionHandler}
                        />)
                    })
                    }
                </ScrollView>
                <DevLabel text={'Basic Listing'} />
            </View >


        )
    );
};