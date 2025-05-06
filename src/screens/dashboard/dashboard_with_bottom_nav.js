import { Text, View } from "react-native";
import { CardGroup, DashboardCard } from "../../components/DashBoardCard";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CustomBottomNavigationBar } from "../../components/CustomBottomNavigationBar";
import { BNPage } from "./components/BNPage";
import { useState } from "react";
import { Carousel } from "../../components/Carousel";


export function DashboardWithBottomNav({ screenData }) {
    console.log('DashboardWithBottomNav', screenData);
    console.log('pages', screenData?.pages);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (index) => {
        console.log(`Selected page index: ${index}`);
        setCurrentPage(index);
    };


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <BNPage pageData={screenData.pages[currentPage]} />
            </View>
            <CustomBottomNavigationBar
                bottomNavigation={screenData?.bottomNavigaton}
                onPageChange={handlePageChange}
            />
        </View>
    );
}