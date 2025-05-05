import { View } from "react-native";
import { globalStyles,defaultStyles } from "../constants/GloablStyles";
import { ComponentRenderer } from "../ComponentsRenderer";
import DevLabel from "../components/DevLabel";



export const BasicDynamicScreen = ({ screenData }) => {
    return (
        <View style={[globalStyles.container,defaultStyles.screen]}>
            {
                screenData.components.map((component, index) => (
                    <ComponentRenderer key={index} componentData={component} />
                ))
            }
            <DevLabel text={'Base Dyanamic Screen'}/>
        </View>
    );
}