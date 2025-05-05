import { BasicDynamicScreen } from "./screens/BaseDynamicScreen";
import { BasicFormScreen } from "./screens/forms/BasicFormsScreen";
import { BasicListingScreen } from "./screens/listing/BasicListingScreen";

//Based on screen type renders diffrent screen types
export function DynamicScreen({screenData}){
    //console.log('DynamicScreen',screenData);
    const {type, title, components} = screenData;
    switch(type){
        case 'listing':
            return <BasicListingScreen screenData={screenData} />;
        case 'form':
            return <BasicFormScreen screenData={screenData} />;
        default:
            return <BasicDynamicScreen screenData={screenData} />;
    
}
}